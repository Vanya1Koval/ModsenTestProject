const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');

const { findAllMeetups, findOneMeetupById, createMeetup, updateMeetup, deleteMeetup } = require('../services/meetup.services');

const getAllMeetups = async (req, res) => {

    const meetups = await findAllMeetups();
    return res.status(200).json(meetups);
};

const getOneMeetup = async (req, res) => {
  
    const { meetupId } = req.params;
    const meetup = await findOneMeetupById(meetupId);
    return res.status(200).json(meetup);
};

const createMeetupAction = async (req, res) => {

    const {title, description, tags, date, place} = req.body;
    const id = uuidv4();
    const created_at = new Date();
    const updated_at = new Date();

    try {
        meetup = await createMeetup(id, title, description, tags, date, place, created_at, updated_at);
    } catch (err) {
    console.log('Create Meetup Action - Cannot create meetup', err);
    return res.status(400).send({ status: 400, message: 'Cannot create meetup' });
    }

    return res.status(201).json(meetup);
};

const updateMeetupAction = async (req, res) => {

    const {meetupId} = req.params;
    const {title, description, tags, date, place} = req.body;
    const updated_at = new Date();
    let meetup;
    
    try {
        meetup = await updateMeetup(meetupId, title, description, tags, date, place, updated_at);
    } catch (err) {
        console.log('Update Meetup Action - Cannot update meetup', err);
        return res.status(400).send({ status: 400, message: 'Cannot update meetup' });
    }
    if (meetup[0]) {
        return res.status(201).json(`Meetup with id ${meetupId} was updated`);
    } else {
        return res.status(400).send({ status: 400, message: 'Cannot update meetup' });
    }
    
    
};

const deleteMeetupAction = async (req, res) => {
    
    const { meetupId } = req.params;
    let meetup;
    try {
        meetup = await deleteMeetup(meetupId);
    } catch (err) {
        console.log('Delete Meetup Action - Cannot delete meetup', err);
        return res.status(400).send({ status: 400, message: 'Cannot delete meetup' });
    }
    if (meetup[0]) {
        return res.status(201).json(`Meetup with id ${meetupId} was deleted`);
    } else {
        return res.status(400).send({ status: 400, message: `Meetup with id ${meetupId} doesn't exist` });
    }
};

module.exports = { getAllMeetups, getOneMeetup, createMeetupAction, updateMeetupAction, deleteMeetupAction };