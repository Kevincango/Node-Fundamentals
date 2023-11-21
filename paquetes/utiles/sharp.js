import sharp from 'sharp';

sharp('originalJS.png')
    .resize(80,80)
    .grayscale()
    .toFile('originalResized.png');