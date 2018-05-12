var RoomController = require('./RoomController');
var ReplyController = require('./ReplyController');
var TopicController = require('./TopicController');
var UserController = require('./UserController');

module.exports = {
  room: RoomController,
  reply: ReplyController,
  topic: TopicController,
  user: UserController
};
