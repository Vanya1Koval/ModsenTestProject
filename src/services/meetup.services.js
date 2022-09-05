const { Op } = require("sequelize");
const { Meetup } = require('../db/models/');


const findAllMeetups = async (search, from, to,  sort, limit, offset) => {
    const meetups = Meetup.findAll({
        limit: `${limit}`, 
        offset:  `${offset}`,           
        where: {
            [Op.and]: [
                search ? {title: {[Op.substring]: `${search}`}} : null,
                from ? {date: {[Op.gte]: `${from}`}} : null,
                to ? {date: {[Op.lte]: `${to}`}} : null,
            ]
        },    
        order: search ?[ ['date', `${sort}`] ] : null
    });
    return meetups;
}

const findOneMeetupById = async (id) => Meetup.findOne({ where: { id } });

const createMeetup = async (payload) => Meetup.create(payload);

const updateMeetup = async (meetupId, title, description, tags, date, place, updated_at) => {
    const updatedMeetup = await Meetup.update(
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

    return updatedMeetup[0];
};

const deleteMeetup = async (meetupId) => {

    const deletedMeetup = await Meetup.destroy({
        where: { id: `${meetupId}` },
    });

    return deletedMeetup;
};

module.exports = {
    findAllMeetups,
    findOneMeetupById,
    createMeetup,
    updateMeetup,
    deleteMeetup
};