const getAllMeetups = async (req, res) => {

    res.status(200).send('All meetups');
};

const getOneMeetup = async (req, res) => {
  
    const { meetupId } = req.params;
    res.status(200).send(`Meetup with id ${meetupId}`);
};

const createMeetup = async (req, res) => {
    const {title, description, tags, date, place} = req.body;
    res.status(200).send(`Meetup with title: ${title},
    description: ${description}, tags: ${tags}, date: ${date},
    place: ${place} created`);
};

const updateMeetup = async (req, res) => {
    const {meetupId, title, description, tags, date, place} = req.body;
    res.status(200).send(`Meetup with id: ${meetupId} was updated`);
};

const deleteMeetup = async (req, res) => {
    
    const { meetupId } = req.params;
    res.status(200).send(`Meetup with id ${meetupId} was deleted`);
};

module.exports = { getAllMeetups, getOneMeetup, createMeetup, updateMeetup, deleteMeetup };