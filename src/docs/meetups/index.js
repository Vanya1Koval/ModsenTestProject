const getMeetups = require('./get-meetups');
const getMeetup = require('./get-meetup');
const createMeetup = require('./create-meetup');
const updateMeetup = require('./update-meetup');
const deleteMeetup = require('./delete-meetup');

module.exports = {
    paths: {
        '/meetups': {
            ...getMeetups,
            ...createMeetup
        },
        '/meetups/{id}': {
            ...getMeetup,
            ...updateMeetup,
            ...deleteMeetup
        }
    }
}