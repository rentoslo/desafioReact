import React from 'react';
// import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Steps from '../views/Steps'

const Header = () =>{
  return (
    <Tabs>
    <TabList>
      <Tab>HOME</Tab>
      <Tab>STEPS</Tab>
    </TabList>

    <TabPanel>
      <h2>Home content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2><Steps /></h2>
    </TabPanel>
  </Tabs>
  )
}

export default Header;