import fs from 'fs';

const uploadImage = (imagePath) => {
  var newPath = 'images/' + Date.now() + '.png';
  fs.rename(imagePath, 'backend/' + newPath, (error) => {
    if (error) {
      console.log(error);
    }
  });

  return newPath;
};

export default uploadImage;
