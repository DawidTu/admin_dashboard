import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const setImage = (src) => {
    setImageSrc(src);
  };

  return (
    <ImageContext.Provider value={{ imageSrc, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
