import React from 'react';

import './SearchBar.scss';

export type SearchBarProps = {
  className: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar: React.FC<SearchBarProps> = ({className, onChange}) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        className={className}
        placeholder="Search..."
        onChange={onChange} />
    </div>
  )
 
}

export default SearchBar;
