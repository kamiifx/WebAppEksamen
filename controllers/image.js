import path from 'path';
import { imageService } from '../services/index.js';
import asyncCatch from '../middleware/asyncCatch.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = asyncCatch(async (req, res, next) => {
    if (!req.file) {
        return next(new ErrorHandler('Last opp en bildefil', 400));
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
        return next(new ErrorHandler('Fant ikke bildefil', 404));
    }

    res.set({
        'Content-Type': image.file_mimetype,
    });

    res.sendFile(path.join(__dirname, '..', image.file_path));
    /*   const imagePath = image.file_path.replace('public/', '');

      res.status(200).json({
         success: true,
         data: { image, imagePath },
       });*/
});