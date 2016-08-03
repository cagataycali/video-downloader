# Installing

```
npm i video-downloader --save
```
[![Code Climate](https://codeclimate.com/github/ccali14/video-downloader/badges/gpa.svg)](https://codeclimate.com/github/ccali14/video-downloader)
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
