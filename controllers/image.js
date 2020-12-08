import path from 'path';
import { imageService } from '../services/index.js';
import asyncCatch from "../middleware/asyncCatch.js";
import errorHandler from "../utils/errorHandler.js";

export const create = asyncCatch(async (req, res, next) => {
    if (!req.file) {
        return next(new errorHandler(`Upload a image file`),400);

    }
    const image = await imageService.uploadImage(req.file);
    res.status(201).json({
        success: true,
        data: image,
    });
});

export const get = asyncCatch(async (req, res, next) => {
    const image = await imageService.getImageById(req.params.id);
    if (!image) {
        return next(new errorHandler(`did not find image ${req.params.id}`),404);
    }

    res.set({
        'Content-Type': image.file_mimetype,
    });

    //res.sendFile(path.join(__dirname, '..', image.file_path));
      const imagePath = image.file_path.replace('public/', '');
    res.status(200).json({
        success: true,
        data: image, imagePath
    });
});
