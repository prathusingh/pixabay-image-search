import React from 'react';
import { useLocation } from 'react-router-dom';

import ImageCard from '../elements/ImageCard';

import './ImageDetails.scss';

const ImageDetails: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user;
  const tags = location.state?.tags;

  return (
    <section className="search-details-wrapper">
      <div className="user-details">
        <p>User name is: {user.name} and id is: {user.id}</p>
        <ImageCard 
            url={user.image}
            height={100} 
            width={100}
        />
      </div>
      <ul className="image-tags">
        Image tags are:
        {
          tags.map((tag: string) => {
            return (
              <li>
                {tag}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default ImageDetails;
