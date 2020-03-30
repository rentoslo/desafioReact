import React from 'react'
import { useTable } from 'react-table'
import { useDispatch } from 'react-redux';
import { actionsUsers } from '../store/ducks/users'


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const dispatch = useDispatch();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },

    hooks => {
      hooks.visibleColumns.push(columns => [
        ...columns,
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              Excluir Registro
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <button type="button" onClick={() => handleDeleteUser(row.original.id)}>Excluir</button>
          ),
        },

      ])
    })

  const handleDeleteUser = (values) => {

    console.log("GGGGGG")
    console.log(values)
    dispatch(actionsUsers.deleteUser(values));
  }


  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table