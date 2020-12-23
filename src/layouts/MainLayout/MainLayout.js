import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = (props) => {
  return (
    <div className="Wrapper">
      <div className="Sidebar">React Starter</div>
      <div className="Main">
        <div className="AppBar">App Bar</div>
        <div className="Content">{props.children}</div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
