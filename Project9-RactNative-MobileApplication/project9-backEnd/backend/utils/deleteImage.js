import fs from 'fs';

const deleteImage = async (imageName) => {
  await fs.unlink('backend/' + imageName, function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
  });
};

export default deleteImage;
