const { v4: uuidv4 } = require('uuid');
const User = require('../db/models').User;

const {
    findAllMeetups,
    findOneMeetupById,
    createMeetup,
    updateMeetup,
    updateMembers,
    deleteMeetup
} = require('../services/meetup.services');

const getAllMeetups = async (req, res) => {
    const { search, from, to, sort, page, limit } = req.query;
    const offset = 0 + (page - 1) * limit;
    const meetups = await findAllMeetups(search, from, to, sort, limit, offset);
    return res.send(meetups);
};

const getOneMeetup = async (req, res) => {
    const { meetupId } = req.params;
    const meetup = await findOneMeetupById(meetupId);
    return res.send(meetup);
};

const createMeetupAction = async (req, res) => {
    try {
        const { title, description, tagsArr, date, place, userId } = req.body;
        const user = await User.findByPk(creatorId)
        console.log(user)
        if (!user) {
            return res.status(400).send({ status: 400, message: 'User doesn`t exist' });
        }
        if (!user.is_admin) {
            return res.status(400).send({ status: 400, message: 'Only a user with admin rights can create meetups' });
        }
        const id = uuidv4();
        const created_at = new Date();
        const updated_at = new Date();
        const creatorId = userId;
        const tags = JSON.stringify(tagsArr);
        const membersId = [];

        const createdMeetup = await createMeetup({
            title,
            description,
            tags,
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
        const { title, description, tagsArr, date, place, userId } = req.body;
        const meetup = await findOneMeetupById(meetupId);
        if (!meetup) {
            return res.status(400).send({ status: 400, message: 'Meetup with enterd id does not exist' });
        }
        if (meetup.creatorId !== userId) {
            return res.status(400).send({ status: 400, message: 'Only its creator can change the mitap' });
        }
        const tags = JSON.stringify(tagsArr);
        const updated_at = new Date();

        const updatedMeetup = await updateMeetup(
            meetupId,
            title,
            description,
            tags,
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
        const meetup = await findOneMeetupById(meetupId);
        const newMembersArr = JSON.parse(meetup.membersId);
        const alredyExist = meetup.membersId.includes(userId);
        if (alredyExist) {
            return res.status(400).send({ status: 400, message: `User is already a member` });
        }
        newMembersArr.push(userId);
        const Members = JSON.stringify(newMembersArr);
        const updatedMeetup = await updateMembers(
            meetupId,
            Members,
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
        const meetup = await findOneMeetupById(meetupId);
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

module.exports = { getAllMeetups, getOneMeetup, createMeetupAction, updateMeetupAction, deleteMeetupAction, addMember };