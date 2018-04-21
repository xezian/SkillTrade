const router = require('express').Router();
const db = require('../../models');
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

const s3 = new aws.S3();

const upload = multer({
  storage: multers3({
    s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    key(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});
// Matches with "/api/upload"
router
  .post('/', upload.any(), (req, res) => {
    console.log(req.body.userID);
    const url = req.files[0].location;
    console.log(url);
    db.User.findById(req.body.userID).then((user) => {
      user.img = url;
      return user.save();
    }).then(() => {
      res.json(url);
    }).catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
  });

module.exports = router;
