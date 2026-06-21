import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimize() {
  await sharp('public/moviexd.png').webp({ quality: 80 }).toFile('public/moviexd.webp');
  await sharp('public/School-managment.png').webp({ quality: 80 }).toFile('public/School-managment.webp');
  console.log('Optimized images!');
}
optimize();
