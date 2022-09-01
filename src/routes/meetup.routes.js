const express = require('express');
const {
    getAllMeetups, 
    getOneMeetup, 
    createMeetup, 
    updateMeetup, 
    deleteMeetup
  } = require('../controllers/meetup.controller');
const router = express.Router();

router.get('/', getAllMeetups);
router.get('/:meetupId', getOneMeetup);
router.post('/', createMeetup);
router.put('/', updateMeetup);
router.delete('/:meetupId', deleteMeetup);

module.exports = router;