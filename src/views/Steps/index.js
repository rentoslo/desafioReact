import React, { useState } from "react";
import { reduxForm, Form } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AddUser from '../../components/addUser'
import AddAddress from '../../components/addAddress'
import ConfirmUserAddress from '../../components/confirmUserAddress'
// actions users
import { actionsUsers } from '../../store/ducks/users'

const Steps = (props) => {

  const { handleSubmit } = props
  const dispatch = useDispatch();
  const returnMessage = useSelector(state => state.user.returnMessage.message);
  const [tabIndex, setTabIndex] = useState(0)

  const handlePrevState = (value) => {
    return setTabIndex(value);
  }
  const handleNextState = (value) => {
    return setTabIndex(value)
  }

  const handleSave = values => {
    dispatch(actionsUsers.addUser(values.name, values.email, values.password, values.street, values.number, values.neighborhood, values.state))
    console.log('values ===>', values)
  }

  return <div>
  <Form onSubmit={handleSubmit(values => handleSave(values))}>
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab disabled>Add User</Tab>
        <Tab disabled>Add Address</Tab>
        <Tab disabled>Confirm</Tab>
      </TabList>

      <TabPanel>
        <AddUser />
        <br /><button onClick={() => handleNextState(tabIndex + 1)}>Next</button>
      </TabPanel>
      <TabPanel>
        <AddAddress />
        <button onClick={() => handleNextState(tabIndex + 1)}>Next</button><br />
        <button onClick={() => handlePrevState(tabIndex - 1)}>Prev</button>
      </TabPanel>
      <TabPanel>
        <ConfirmUserAddress />
        <button type='submit'>Confirm</button><br />
        <button onClick={() => handlePrevState(tabIndex - 1)}>Prev</button>

      </TabPanel>
    </Tabs>
  </Form>
  <h4> {returnMessage} </h4>
  </div>
};

//Tipar as props usadas
Steps.propTypes = {
};

export default reduxForm({
  form: 'steps'
})(Steps);