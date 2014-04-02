[![Build Status](https://circleci.com/gh/segmentio/nsq-manage.png?circle-token=32f95a26531457eb2db113cff8d28fb1e3fb29e3)](https://circleci.com/gh/segmentio/nsq-manage)

# nsq-manage

  Manage nsqd instances. Basically a lightweight wrapper about nsqd's http api.

## Installation

```bash
$ npm install nsq-manage
```

## Example

```bash
var manage = require('nsq-manage')('http://localhost:4151');

manage.createTopic('name', function(err){
  // ...
});
```

## API

### Manage(nsqd)

### #createTopic(topic, fn)

### #deleteTopic(topic, fn)

### #createChannel(topic, channel, fn)

### #deleteChannel(topic, channel, fn)

### #emptyChannel(topic, channel, fn)

### #pauseChannel(topic, channel, fn)

### #unpauseChannel(topic, channel, fn)

### #stats(fn)

### #ping(fn)
