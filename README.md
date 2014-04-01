
# nsq-manage

  Manage nsqd instances.

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
