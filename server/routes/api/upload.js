const router = require('express').Router();
// upload handling
const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');
const path = require('path');

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'us-west-1',
});

let s3 = new aws.S3()

const upload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    key: function(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
});
// Matches with "/api/upload"
router
  .post('/', upload.any(), (req, res) => {
    console.log(req);
  });

module.exports = router;
