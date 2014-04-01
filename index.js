var request = require('superagent');
var assert = require('assert');

module.exports = Manage;

function Manage(nsqd){
  assert(nsqd, 'nsqd required');
  this.nsqd = nsqd;
}

Manage.prototype.createTopic = function(topic, fn){
  request
    .post(this.nsqd + '/create_topic')
    .query({ topic: topic })
    .end(wrap(fn));
};

Manage.prototype.deleteTopic = function(topic, fn){
  request
    .post(this.nsqd + '/delete_topic')
    .query({ topic: topic })
    .end(wrap(fn));
};

Manage.prototype.createChannel = function(topic, channel, fn){
  request
    .post(this.nsqd + '/create_channel')
    .query({ topic: topic, channel: channel })
    .end(wrap(fn));
};

Manage.prototype.deleteChannel = function(topic, channel, fn){
  request
    .post(this.nsqd + '/delete_channel')
    .query({ topic: topic, channel: channel })
    .end(wrap(fn));
};

Manage.prototype.emptyChannel = function(topic, channel, fn){
  request
    .post(this.nsqd + '/empty_channel')
    .query({ topic: topic, channel: channel })
    .end(wrap(fn));
};

Manage.prototype.pauseChannel = function(topic, channel, fn){
  request
    .post(this.nsqd + '/pause_channel')
    .query({ topic: topic, channel: channel })
    .end(wrap(fn));
};

Manage.prototype.unpauseChannel = function(topic, channel, fn){
  request
    .post(this.nsqd + '/unpause_channel')
    .query({ topic: topic, channel: channel })
    .end(wrap(fn));
};

Manage.prototype.stats = function(fn){
  request
    .post(this.nsqd + '/stats')
    .query({ format: 'json' })
    .end(wrap(fn));
};

Manage.prototype.ping = function(fn){
  request
    .post(this.nsqd + '/ping')
    .end(wrap(fn));
};

function wrap(fn){
  return function(err, res){
    if (err) return fn(err);
    if (!res.ok) return fn(res.text);
    fn();
  };
};

