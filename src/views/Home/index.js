import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//para react-table
import Table from '../../components/table'
import StyleTable from '../../components/tableStyles'

const Home = () => {
  const users = useSelector(state => state.user.users)
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
        <Table columns={columns} data={users} />
      </StyleTable>
    </div>
  )
}

export default Home;