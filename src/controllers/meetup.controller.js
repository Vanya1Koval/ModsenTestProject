const { v4: uuidv4 } = require('uuid');

const {
    findAllMeetups,
    findOneMeetupById,
    createMeetup,
    updateMeetup,
    deleteMeetup
} = require('../services/meetup.services');

const getAllMeetups = async (req, res) => {
    const { search, filter, sort } = req.query;
    console.log(search, filter, sort)
    const meetups = await findAllMeetups(search, filter, sort);
    return res.send(meetups);
};

const getOneMeetup = async (req, res) => {
    const { meetupId } = req.params;
    const meetup = await findOneMeetupById(meetupId);
    return res.send(meetup);
};

const createMeetupAction = async (req, res) => {
    try {
        const { title, description, tags, date, place } = req.body;
        const id = uuidv4();
        const created_at = new Date();
        const updated_at = new Date();

        const createdMeetup = await createMeetup({
            title,
            description,
            tags,
            date,
            place,
            id,
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
        const { meetupId }  = req.params;
        const { title, description, tags, date, place } = req.body;
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
        return res.status(400).send({ status: 400, message: `Cannot update meetup or meetup with enterd id doesn't exist` });
    }
};

const deleteMeetupAction = async (req, res) => {
    try {
        const { meetupId } = req.params;
        console.log(meetupId)
        const deletedMeetup = await deleteMeetup(meetupId);
        console.log(deletedMeetup)

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

module.exports = { getAllMeetups, getOneMeetup, createMeetupAction, updateMeetupAction, deleteMeetupAction };