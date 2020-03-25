import React, { useState, useEffect } from "react";
import { Form, Field, reduxForm } from 'redux-form'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// actions users
import { actionsUsers } from '../../store/ducks/users'

const Home = () => {
  const users = useSelector(state => state.user.users);
  const lista = users.map( (user) => {
  return <div>{user.name} - {user.email}</div>
  })
  return lista
};

//Tipar as props usadas
Home.propTypes = {
};

export default Home;