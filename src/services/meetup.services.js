const { Op } = require("sequelize");
const { Meetup } = require('../db/models/');

const findAllMeetups = async (search, from, to,  sort, limit, offset) => {
    const meetups = Meetup.findAll({
        limit, 
        offset,           
        where: {
            [Op.and]: [
                search ? {title: {[Op.substring]: search}} : null,
                from ? {date: {[Op.gte]: from}} : null,
                to ? {date: {[Op.lte]: to}} : null,
            ]
        },    
        order: sort ? [ ['date', sort] ] : null
    });
    return meetups;
}

const findMeetupById = async (id) => Meetup.findByPk(id);

const createMeetup = async (payload) => Meetup.create(payload);

const updateMeetup = async (meetupId, title, description, tags, date, place, updated_at) => {
    const updatedMeetup = await Meetup.update(
        {
            title,
            description,
            tags,
            date,
            place,
            updated_at
        },
        {
            where: { id: meetupId },
        }
    );
    return updatedMeetup[0];
};

const updateMembers = async (meetupId, memberIds, updated_at) => {
    const updatedMember = await Meetup.update(
        {
            membersId: memberIds,
            updated_at
        },
        {
            where: { id: meetupId },
        }
    );
    return updatedMember[0];
};

const deleteMeetup = async (meetupId) => {
    const deletedMeetup = await Meetup.destroy({
        where: { id: meetupId },
    });

    return deletedMeetup;
};

module.exports = {
    findAllMeetups,
    findMeetupById,
    createMeetup,
    updateMeetup,
    updateMembers,
    deleteMeetup
};