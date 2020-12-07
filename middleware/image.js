import multer from 'multer';


function fileFilter(req, file, cb) {
    const filetypes = /\.(jpeg|jpg|png)$/;
    if (!file.originalame.match(filetypes)) {
        return cb(new console.log('Kun bildefiler er lov'));
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
