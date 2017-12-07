import React from 'react';
import Search from './Search';

const Header = props => {
  return (
    <div>
      HEADER
      <Search
        steering={props.steering}
        onSubmit={props.onSubmit}
        handleSearch={props.handleSearch}
        handleKeyPress={props.handleKeyPress}
      />
    </div>
  );
};

export default Header;
