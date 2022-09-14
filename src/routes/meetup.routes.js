const express = require('express');
const validation = require('../middleware/meetupValidation');
const queryValidation = require('../middleware/queryValidation');
const { isAuthenticated } = require('../middleware/checkToken');
const {
  getMeetups,
  getMeetup,
  createMeetupAction,
  updateMeetupAction,
  deleteMeetupAction
} = require('../controllers/meetup.controller');
const router = express.Router();

router.get('/', isAuthenticated, queryValidation(), getMeetups);
router.get('/:meetupId', isAuthenticated, getMeetup);
router.post('/', isAuthenticated, validation(), createMeetupAction);
router.put('/:meetupId', isAuthenticated, validation(), updateMeetupAction);
router.delete('/:meetupId', isAuthenticated, deleteMeetupAction);

module.exports = router;