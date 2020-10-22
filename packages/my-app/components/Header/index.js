import React, { memo } from 'react';

import Drawer from 'components/MenuDrawer';

const Header = () => {
  return (
    <div className='px-3'>
      <Drawer/>
    </div>
  );
};

export default memo(Header);