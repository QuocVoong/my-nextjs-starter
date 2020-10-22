import React, { memo } from 'react';
import { Grid }        from 'rsuite';
import Header from 'components/Header';

const MainLayout = ({ children }) => {
  return (
    <Grid fluid className='px-0'>
      <Header/>
      {children}
    </Grid>
  );
};

export default memo(MainLayout);