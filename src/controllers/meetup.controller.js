const { v4: uuidv4 } = require('uuid');
const User = require('../db/models').User;

const {
    findAllMeetups,
    findMeetupById,
    createMeetup,
    updateMeetup,
    updateMembers,
    deleteMeetup
} = require('../services/meetup.services');

const getMeetups = async (req, res) => {
    const { search, from, to, sort, page, limit } = req.query;
    const offset = (page - 1) * limit;
    const meetups = await findAllMeetups(search, from, to, sort, limit, offset);
    return res.send(meetups);
};

const getMeetup = async (req, res) => {
    const { meetupId } = req.params;
    const meetup = await findMeetupById(meetupId);
    return res.send(meetup);
};

const createMeetupAction = async (req, res) => {
    try {
        const { title, description, tags, date, place, userId } = req.body;
        const user = await User.findByPk(userId)
        if (!user) {
            return res.status(400).send({ status: 400, message: 'User doesn`t exist' });
        }
        if (!user.is_admin) {
            return res.status(400).send({ status: 400, message: 'Only a user with admin rights can create meetups' });
        }
        const id = uuidv4();
        const currentDate = new Date();
        const created_at = currentDate;
        const updated_at = currentDate;
        const creatorId = userId;
        const membersId = [];

        const createdMeetup = await createMeetup({
            title,
            description,
            tags: JSON.stringify(tags),
            date,
            place,
            id,
            creatorId,
            membersId,
            created_at,
            updated_at
        });

        return res.status(201).send(createdMeetup);
    } catch (err) {
        console.log('Create Meetup Action - Cannot create meetup', err);
        return res.status(400).send({ status: 400, message: 'Cannot create meetup' });
    }
};

const updateMeetupAction = async (req, res) => {
    try {
        const { meetupId } = req.params;
        const { title, description, tags, date, place, userId } = req.body;
        const meetup = await findMeetupById(meetupId);
        if (!meetup) {
            return res.status(400).send({ status: 400, message: 'Meetup with enterd id does not exist' });
        }
        if (meetup.creatorId !== userId) {
            return res.status(400).send({ status: 400, message: 'Only its creator can change the mitap' });
        }

        const updated_at = new Date();

        const updatedMeetup = await updateMeetup(
            meetupId,
            title,
            description,
            JSON.stringify(tags),
            date,
            place,
            updated_at
        );

        if (updatedMeetup) {
            return res.status(201).send(`Meetup with id ${meetupId} was updated`);
        } else {
            throw new Error();
        }

    } catch (err) {
        console.log('Update Meetup Action - Cannot update meetup', err);
        return res.status(400).send({ status: 400, message: 'Cannot update meetup' });
    }
};

const addMember = async (req, res) => {
    try {
        const { meetupId } = req.params;
        const { userId } = req.body;
        const updated_at = new Date();
        const meetup = await findMeetupById(meetupId);
        if (!meetup){
            return res.status(400).send({ status: 400, message: 'Meetup with enterd id does not exist' });
        }
        let memberIds;
        meetup.membersId[0] ? memberIds = JSON.parse(meetup.membersId) : memberIds = meetup.membersId;
        const memberExists = memberIds.includes(userId);
        if (memberExists) {
            return res.status(400).send({ status: 400, message: `User is already a member` });
        }
        memberIds.push(userId);
        const updatedMeetup = await updateMembers(
            meetupId,
            JSON.stringify(memberIds),
            updated_at
        );
        if (updatedMeetup) {
            return res.status(201).send(`Meetup with id ${meetupId} was updated`);
        } else {
            throw new Error();
        }

    } catch (err) {
        console.log('Update Meetup Action - Cannot update meetup', err);
        return res.status(400).send({ status: 400, message: `Cannot update meetup or meetup with enterd id doesn't exist` });
    }
};

const deleteMeetupAction = async (req, res) => {
    try {
        const { meetupId } = req.params;
        const { userId } = req.body;
        console.log(meetupId, req.body)
        const meetup = await findMeetupById(meetupId);
        if (!meetup) {
            return res.status(400).send({ status: 400, message: 'Meetup with enterd id does not exist' });
        }
        if (meetup.creatorId !== userId) {
            return res.status(400).send({ status: 400, message: 'Only its creator can change the mitap' });
        }
        const deletedMeetup = await deleteMeetup(meetupId);
        if (deletedMeetup) {
            return res.status(201).json(`Meetup with id ${meetupId} was deleted`);
        } else {
            throw new Error();
        }
    } catch (err) {
        console.log('Delete Meetup Action - Cannot delete meetup', err);
        return res.status(400).send({ status: 400, message: `Cannot delete meetup or meetup with entered id doesn't exist` });
    }
};

module.exports = { getMeetups, getMeetup, createMeetupAction, updateMeetupAction, deleteMeetupAction, addMember };