import React from 'react';

type ImageCardProps = {
  url: string,
  key?: number,
}

const ImageCard: React.FC<ImageCardProps> = ({url, key}) => {
  return (
    <div className="image-card-wrapper">
      <img src={url} key={key} alt=""/>
    </div>
  )
}

export default ImageCard;
