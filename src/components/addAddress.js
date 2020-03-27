import React from 'react';
import { Field } from 'redux-form'

import Input from '../components/input'

const AddAddress = () => {
  return (
    <div>
        <Field 
          name = "street"
          component= {Input}
          type="text"
          label="Street:"
        />
        <Field 
          name = "number"
          component= {Input}
          type="text"
          label="Number:"
        />
        <Field 
          name = "neighborhood"
          component= {Input}
          type="text"
          label="Neighborhood:"
        />
        <Field 
          name = "state"
          component= {Input}
          type="text"
          label="State:"
        />
    </div>
  )
}

export default AddAddress;