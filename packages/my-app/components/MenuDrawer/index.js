import React, { memo, useCallback, useState, useEffect, useRef, useMemo } from 'react';
import { IconButton, Icon, Drawer, Sidenav, Nav }                         from 'rsuite';
import Link                                                               from 'next/link';
import { useRouter }                                                      from 'next/router';

const navItems = [
  {
    name:     'Dashboard',
    to:       'dashboard',
    icon:     <Icon icon="dashboard"/>,
    eventKey: 1
  },
  {
    name:     'POS',
    to:       'pos',
    icon:     <Icon icon="usd"/>,
    eventKey: 2
  },
  {
    name:     'Customer',
    to:       'customer',
    icon:     <Icon icon="group"/>,
    eventKey: 3
  },
];

const InnerNavLink = memo(props => {
  const { to, ...rest } = props;
  return <Nav.Item renderItem={item => {
    return <Link href={to}>{item}</Link>;
  }} {...rest}/>;
});

const MenuDrawer = () => {
  const router            = useRouter();
  const mounted           = useRef(false);
  const [state, setState] = useState({
    show: false,
  });

  useEffect(() => {
    if (mounted.current) {
      setState(prev => ({ ...prev, show: false }));
    }

    if (!mounted.current) {
      mounted.current = true;
    }

  }, [router]);

  const handleClick = useCallback(() => {
    setState(prev => ({ ...prev, show: true }));
  }, []);

  const handleClose = useCallback(() => {
    setState(prev => ({ ...prev, show: false }));
  }, []);

  const activeKey = useMemo(() => {
    return (navItems.find(navItem => {
      return router.pathname === `/${navItem.to}`;
    }) || { eventKey: '0' }).eventKey;
  }, [router]);

  return (
    <>
      <IconButton
        onClick={handleClick}
        className='rounded-0 border-0'
        icon={<Icon icon="th2"/>}
        size="lg"
      />
      <Drawer
        size='xs'
        placement='left'
        show={state.show}
        onHide={handleClose}
      >
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Sidenav appearance='subtle' activeKey={activeKey}>
            <Sidenav.Body>
              <Nav>
                {navItems.map((navItem, index) => {
                  return (
                    <InnerNavLink to={navItem.to} eventKey={navItem.eventKey} key={navItem.eventKey}
                                  icon={navItem.icon}>
                      {navItem.name}
                    </InnerNavLink>
                  );
                })}
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Drawer.Body>
        <Drawer.Footer>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

export default memo(MenuDrawer);
