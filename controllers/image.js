import path from 'path';
import { imageService } from '../services/index.js';

export const create = (async (req, res, next) => {
    if (!req.file) {
        return next(console.log("Upload a image file"));
    }
    const image = await imageService.uploadImage(req.file);
    res.status(201).json({
        success: true,
        data: image,
    });
});

export const get = (async (req, res, next) => {
    const image = await imageService.getImageById(req.params.id);
    if (!image) {
        return next(console.log("did not find image"));
    }

    res.set({
        'Content-Type': image.file_mimetype,
    });

    res.sendFile(path.join(__dirname, '..', image.file_path));
    //   const imagePath = image.file_path.replace('public/', '');
    //   res.status(200).json({
    //     success: true,
    //     data: { image, imagePath },
    //   });
});
