const express = require('express');
const validation = require('../middleware/validation');
const queryValidation = require('../middleware/queryValidation');
const {
  getAllMeetups,
  getOneMeetup,
  createMeetupAction,
  updateMeetupAction,
  deleteMeetupAction
} = require('../controllers/meetup.controller');
const router = express.Router();

router.get('/', queryValidation(), getAllMeetups);
router.get('/:meetupId', getOneMeetup);
router.post('/', validation(), createMeetupAction);
router.put('/:meetupId', validation(), updateMeetupAction);
router.delete('/:meetupId', deleteMeetupAction);

module.exports = router;