import React from 'react';

export type SearchBarProps = {
  className: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar: React.FC<SearchBarProps> = ({className, onChange}) => {
  return (
    <div className="search-wrapper">
      <input
        type="search"
        className={className}
        placeholder="Search..."
        onChange={onChange} />
    </div>
  )
 
}

export default SearchBar;
