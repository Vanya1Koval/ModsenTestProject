const express = require('express');
const {
    getAllMeetups, 
    getOneMeetup, 
    createMeetupAction, 
    updateMeetupAction, 
    deleteMeetupAction
  } = require('../controllers/meetup.controller');
const router = express.Router();

router.get('/', getAllMeetups);
router.get('/:meetupId', getOneMeetup);
router.post('/', createMeetupAction);
router.put('/:meetupId', updateMeetupAction);
router.delete('/:meetupId', deleteMeetupAction);

module.exports = router;