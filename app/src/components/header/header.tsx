import React, { FunctionComponent } from 'react';
import { Button } from '@ds/components';

import './header.scss';

export const Header: FunctionComponent = (props) => {
  return (
    <header className="header">
      Header is a local component to the app composed by core design system components
      <Button className="btn">This button is a core design system component</Button>
    </header>
  );
};

export default Header;