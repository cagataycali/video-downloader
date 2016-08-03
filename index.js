const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = function downloader(videoUrl, outputName, outputDir) {
  return new Promise((resolve) => {
    /**
     Prepare file path
     */
    const extension = path.extname(videoUrl);
    const filePath = outputDir + outputName + extension;

    /**
     Open create write stream
     */
    const videoFile = fs.createWriteStream(filePath);

    /**
     Do get request for download remote video
     */
    http.get(videoUrl, (response) => {
      const stream = response.pipe(videoFile);
      stream.on('finish', () => {
        console.log('Download finised');
        resolve(filePath);
      });
    });
  });
};
