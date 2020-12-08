//tatt fra forelesning
import multer from 'multer';
import errorHandler from "../utils/errorHandler.js";

function fileFilter(req, file, cb) {
    const filetypes = /\.(jpeg|jpg|png)$/;
    if (!file.originalname.match(filetypes)) {
        return cb(new errorHandler('Can only upload image files (jpeg, jpg, png)', 400));

    }
    cb(null, true);
}

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public/images');
    },
    filename(req, file, cb) {
        cb(null, `custom_value_${file.originalname}`);
    },
});

export const upload = multer({
    storage,
    limits: { fileSize: 2000000 }, // 2mb
    fileFilter,
}).single('image');
