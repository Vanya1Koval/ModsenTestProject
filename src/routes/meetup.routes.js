const express = require('express');
const validation = require('../middleware/meetupValidation');
const queryValidation = require('../middleware/queryValidation');
const { isAuthenticated } = require('../middleware/checkToken');
const {
  getAllMeetups,
  getOneMeetup,
  createMeetupAction,
  updateMeetupAction,
  deleteMeetupAction
} = require('../controllers/meetup.controller');
const router = express.Router();

router.get('/', isAuthenticated, queryValidation(), getAllMeetups);
router.get('/:meetupId', isAuthenticated, getOneMeetup);
router.post('/', isAuthenticated, validation(), createMeetupAction);
router.put('/:meetupId', isAuthenticated, validation(), updateMeetupAction);
router.delete('/:meetupId', isAuthenticated, deleteMeetupAction);

//"username": "User1",

module.exports = router;