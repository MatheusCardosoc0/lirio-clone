import React from 'react';
import { FileInput, FileLabel, ImageUploadContainer, ImageView } from './imageUploadStyle';

const ImageUpload = ({
  setImage,
  image
}) => {

  const uploadImage = async (e) => {
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'pfoyut3r');

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dtpj4lrpa/image/upload',
        {
          method: 'POST',
          body: data
        }
      );

      const file = await res.json();

      setImage(file.secure_url)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ImageUploadContainer>
      <FileInput type="file" id="file-upload" onChange={uploadImage} />
      <FileLabel htmlFor="file-upload">
        Selecionar a imagem da pessoa
      </FileLabel>
      {image && (
        <ImageView src={image && image} alt='' />
      )}
    </ImageUploadContainer>
  );
};

export default ImageUpload;
