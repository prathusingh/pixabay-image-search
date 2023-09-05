import React from 'react';

import './ImageCard.scss';

type ImageCardProps = {
  url: string,
  key?: number,
  height?: number,
  width?: number,
}

const ImageCard: React.FC<ImageCardProps> = ({url, key, height, width}) => {
  return (
    <div className="image-card-wrapper">
      <img src={url} key={key} alt="" height={height} width={width}/>
    </div>
  )
}

export default ImageCard;
