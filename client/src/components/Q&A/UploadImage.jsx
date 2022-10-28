import React, {useState, useEffect} from 'react';
import { CloudinaryContext } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from './CloudinaryHelpers.js';
import {CLOUDINARY_CLOUD_NAME, PRESET } from "/MyConfig.js";

const UploadImage = ({setPhotos}) => {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: CLOUDINARY_CLOUD_NAME,
      tags: [tag, 'anImage'],
      uploadPreset: PRESET
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if(photos.event === 'success'){
          setImages([...images, photos.info.url])
        }
      } else {
        console.log(error);
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
    setPhotos(images);
  }, [images])

  return (
   <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
      <div className="App">
       {images.length < 4 ? <button onClick={(e) => {e.preventDefault(); beginUpload("image")}}>Upload Image</button> : null}
      <section>
        {images.map(i =>
        <img key={i} publicId={i} fetch-format="auto" quality="auto" src={i} height="50px"/>)}
      </section>
    </div>
   </CloudinaryContext>
  )
}

export default UploadImage;

