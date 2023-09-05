import React, { useState, useEffect } from 'react';

interface Image {
  id: number,
  tags: string,
  previewURL: string,
  userID: number,
  user: string,
  userImageURL: string,
}

const ImageSearch: React.FC = () => {
  const [images, setImages] = useState<Partial<Image[]>>([]);
  const [error, setError] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const apiKey = "39247438-ec9e05475ed661926fc0415e0";
  const api = "https://pixabay.com/api/";

  const successCb = (images: Image[]) => {
    setIsLoaded(true);
    setImages(images);
    console.log(images);
  }

  const errorCb = (error: string) => {
    setIsLoaded(true);
    setError(error);
  }

  useEffect(() => {
    fetch(`${api}?key=${apiKey}`)
    .then(res => res.json())
    .then((results) => {
      const images = results.hits.map((result: any) => {
        return {
          id: result.id,
          tags: result.tags,
          previewURL: result.previewURL,
          userID: result.user_id,
          user: result.user,
          userImageURL: result.userImageURL
        }
      })
      successCb(images);
    },
    (error) => {
      errorCb(error);
    })
  }, []);

  return (
    <div>Image Search</div>
  )
}

export default ImageSearch;