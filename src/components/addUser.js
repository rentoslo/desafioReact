import React from 'react';
import { Field } from 'redux-form'

import Input from '../components/input'

const AddUser = () => {
  return (
    <div>
        <Field 
          name = "name"
          component= {Input}
          type="text"
          label="Name:"
        />
        <Field 
          name = "email"
          component= {Input}
          type="text"
          label="Email:"
        />
        <Field 
          name = "password"
          component= {Input}
          type="password"
          label="Password:"
        />
    </div>
  )
}

export default AddUser;