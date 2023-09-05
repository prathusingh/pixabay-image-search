import React from 'react';

const Loading: React.FC<{message: string}> = ({ message }) => {
  return (
    <div className="loading">
      {message}
    </div>
  )
}

export default Loading;