const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = function downloader(videoUrl, outputName, outputDir) {
  return new Promise((resolve) => {
    const extension = path.extname(videoUrl);
    const filePath = outputDir + outputName + extension;
    const videoFile = fs.createWriteStream(filePath);
    http.get(videoUrl, (response) => {
      const stream = response.pipe(videoFile);
      stream.on('finish', () => {
        resolve(filePath);
      });
    });
  });
};
