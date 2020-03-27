import React from 'react';
import { useSelector } from 'react-redux';
//para react-table
import Table from '../components/table'
import StyleTable from '../components/tableStyles'



const ConfirmUserAddress = () => {
  const newUser = [useSelector(state => state.form.steps.values)];
  const columns = React.useMemo(
    () => [
      {
        Header: 'User',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
        ],
      },
      {
        Header: 'Address',
        columns: [
          {
            Header: 'Street',
            accessor: 'street',
          },
          {
            Header: 'Number',
            accessor: 'number',
          },
          {
            Header: 'Neighborhood',
            accessor: 'neighborhood',
          },
          {
            Header: 'State',
            accessor: 'state',
          },
        ],
      },
    ],
    []
  )

  return (
    <div>
      <StyleTable>
        <Table columns={columns} data={newUser} />
      </StyleTable>
    </div>
  )
}

export default ConfirmUserAddress;