const multer = require('multer')
const path = require('path')
const fs = require('fs')

const filestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log("file===========>", file)
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({
  storage: filestorage,
  fileFilter: (req, file, cb)=> {
    let ext = path.extname(file.originalname)
    if (ext != '.mkv' && ext != '.mp4') {
      return cb(new Error("only video allowed"))
    }
    cb(null, true)
  }
})

module.exports = upload;