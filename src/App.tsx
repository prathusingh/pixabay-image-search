import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ImageSearch from './search/ImageSearch';
import ImageDetails from './search/ImageDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImageSearch/>} />
        <Route path="/:id" element={<ImageDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
