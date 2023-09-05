import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../elements/SearchBar';
import ImageCard from '../elements/ImageCard';
import Loading from '../loading/Loading';

import './ImageSearch.scss';

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
  }

  const errorCb = (error: string) => {
    setIsLoaded(true);
    setError(error);
  }

  const getUserData = (image: Image) => {
    // format user data to show on Image details
    return {
      id: image.userID,
      name: image.user,
      image: image.userImageURL,
    }
  }

  const getImageTags = (image: Image) => {
    // format tags to show on Image details
    return image.tags.split(',').map((tag: string) => {
      return tag.trim();
    });
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // handler for input change on search bar
    // TODO: add on change functionality
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
    <section className="image-search-wrapper">
      <SearchBar className="medium-search-bar" onChange={onInputChange} />
      <div className="image-results">
        {
          error && 
          <div className="images-response-text">
            Can't able to load images.
          </div>
        }
        {
          !isLoaded && 
          <Loading className="images-response-text" message="Images loading ..."/>
        }
        {
          images.length < 1 && 
          isLoaded && 
          <div className="images-response-text">
            No images found.
          </div>
        }
        {
          <ul className="images-list">
            {
              images.map((image: any) => {
                return (
                  <li>
                    <Link 
                      to={`/${image.id}`}
                      state={
                        {
                          user: getUserData(image), 
                          tags: getImageTags(image),
                        }
                      }>
                        <ImageCard 
                          key={image.id}
                          url={image.previewURL}
                          height={100} 
                          width={100}
                      />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
    </section>
  )
}

export default ImageSearch;
