import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Steps = () => {

  const [tabIndex, setTabIndex] = useState(0)

  const handlePrevState = (value) => {
    return setTabIndex(value);
  }
  const handleNextState = (value) => {
    return setTabIndex(value)
  }

  return <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
    <TabList>
      <Tab disabled>Add User</Tab>
      <Tab disabled>Add Address</Tab>
      <Tab disabled>Confirm</Tab>
    </TabList>

    <TabPanel>
      <h2>Add user content</h2>
      <br /><button onClick={() => handleNextState(tabIndex + 1)}>Next</button>
    </TabPanel>
    <TabPanel>
      <h2>Add address content</h2>
      <button onClick={() => handlePrevState(tabIndex - 1)}>Prev</button><br />
      <button onClick={() => handleNextState(tabIndex + 1)}>Next</button>
    </TabPanel>
    <TabPanel>
      <h2>Confirm content</h2>
      <button onClick={() => handlePrevState(tabIndex - 1)}>Prev</button><br />
      <button>Confirm</button>

    </TabPanel>
  </Tabs>
};

//Tipar as props usadas
Steps.propTypes = {
};

export default Steps;