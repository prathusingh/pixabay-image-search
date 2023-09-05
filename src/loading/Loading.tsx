import React from 'react';

import './Loading.scss';

const Loading: React.FC<{message: string, className: string}> = ({ message, className }) => {
  return (
    <div className={className}>
      <span className="loading">{message}</span>
    </div>
  )
}

export default Loading;