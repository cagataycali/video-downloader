# Installing

```
npm i video-downloader --save
```

# Using

```
var download = require('video-downloader');


var videoUrl = 'http://localhost/test.webm'
var outputName = 'output';
var outputDir = '/tmp/';

download(videoUrl, outputName, outputDir).then(function(output) {
  console.log(output);
});

```
