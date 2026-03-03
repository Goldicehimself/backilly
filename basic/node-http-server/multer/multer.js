const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const Path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();
    const fileExtension =Path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
  }
});
const upload = multer({ 
    storage: storage,
    fileFilter:(req, file, cb)=>{
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
    
        if(!allowedTypes.includes(file.mimetype)){
           return cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and JPG are allowed.'), false)
        } 
        cb(null, true);
    },
    });
    const uploadSingle = upload.single('imageCover'); // 'image' is the field name in the form
    const uploadMultiple = upload.array('images', 5); // 'images' is the field name in the form, max 5 files

module.exports = {
    uploadSingle,
    uploadMultiple
}
