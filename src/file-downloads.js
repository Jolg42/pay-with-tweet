import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

function copyFile(src, dest) {
    let readStream = fs.createReadStream(src);

    readStream.once('error', (err) => {
    console.log(err);
    });

    readStream.once('end', () => {
    console.log('done copying');
    });

    readStream.pipe(fs.createWriteStream(dest));
}

// Path where we store the download sessions
const DL_SESSION_FOLDER = __dirname + '/download';

export default class DownloadHandler {
/* Creates a download session */
static createDownload(filePath, callback) {
    console.log(`Path: ${filePath}`);
    console.log();
    // Check the existence of DL_SESSION_FOLDER
    if (!fs.existsSync(DL_SESSION_FOLDER)) {
        return callback(new Error('Session directory does not exist'));
    } else {
        console.log('Folder exists');
    }
      
  
    // Check the existence of the file
    if (!fs.existsSync(filePath)) {
        return callback(new Error('File doest not exist'));
    } else{
        console.log('File exists');
    }
     
  
    // Generate the download sid (session id)
    let downloadSid = crypto.createHash('md5').update(Math.random().toString()).digest('hex');
  
    // Generate the download session filename
    let dlSessionFileName = path.join(DL_SESSION_FOLDER, downloadSid + '.pdf');
  
    // Write the link of the file to the download session file
    copyFile(filePath, dlSessionFileName);
    // If succeeded, return the new download sid
    callback(null, downloadSid);
  }
  
  /* Gets the download file path related to a download sid */
  static  getDownloadFilePath(downloadSid, callback) {
    // Get the download session file name
    let dlSessionFileName = path.join(DL_SESSION_FOLDER, downloadSid + '.download');
  
    // Check if the download session exists
    if (!fs.existsSync(dlSessionFileName)) 
      return callback(new Error('Download does not exist'));
  
    // Get the file path
    fs.readFile(dlSessionFileName, (err, data) => {
      if (err) {
          return callback(err);
      }
      // Return the file path
      callback(null, data);
    });
  }
  
  /* Deletes a download session */
  static deleteDownload(downloadSid, callback) {
    // Get the download session file name
    var dlSessionFileName = path.join(DL_SESSION_FOLDER, downloadSid + '.download');
  
    // Check if the download session exists
    if (!fs.existsSync(dlSessionFileName)) {
      return callback(new Error('Download does not exist'));
    }
  
    // Delete the download session
    fs.unlink(dlSessionFileName, function(err) {
      if (err){ 
          return callback(err);
      } 
      // Return success (no error)
      callback();
    });
  }
  
};