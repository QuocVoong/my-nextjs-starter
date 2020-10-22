import React, { memo } from 'react';

const GlobalLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default memo(GlobalLayout);