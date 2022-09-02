const { Meetup } = require('../db/models/');


const findAllMeetups = async () => {
   
    return meetups = await Meetup.findAll();
};

const findOneMeetupById = async (id) => {

    return meetup = await Meetup.findOne({
        where: { id },
      });
};

const createMeetup = async (payload) => {
 
    return meetup = await Meetup.create(payload);   
};

const updateMeetup = async (meetupId, title, description, tags, date, place, updated_at) => {

    return  meetup = await Meetup.update(
        {
            title: `${title}`,
            description: `${description}`,
            tags: `${tags}`,
            date: `${date}`,
            place: `${place}`,
            updated_at: `${updated_at}`
          },
          {
            where: { id: `${meetupId}` },
          }

    );
};

const deleteMeetup = async (meetupId) => {
 
    return meetup = await Meetup.destroy({
        where: { id: `${meetupId}` },
      });   
};

module.exports = {
    findAllMeetups,
    findOneMeetupById,
    createMeetup,
    updateMeetup,
    deleteMeetup
  };