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

  Create a management instance with the `nsqd` http address.

### #createTopic(topic, fn)

  Create `topic`.

### #deleteTopic(topic, fn)

  Delete `topic`.

### #createChannel(topic, channel, fn)

  Create `channel` for an existing `topic`.

### #deleteChannel(topic, channel, fn)

  Delete `channel` for an existing `topic`.

### #emptyChannel(topic, channel, fn)

  Empty `channel` for an existing `topic`.

### #pauseChannel(topic, channel, fn)

  Pause `channel` for an existing `topic`.

### #unpauseChannel(topic, channel, fn)

  Unpause `channel` for an existing `topic`.

### #stats(fn)

  Get internal instrumented statistics.

### #ping(fn)

  Check health.

## License

  MIT

