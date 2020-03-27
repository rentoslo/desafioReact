const initialState = {
  users: [
    {
      id: 123,
      name: "Renato",
      email: "renato2@email2",
      password: "abcde4",
      street: "Rua Abc",
      number: 11,
      neighborhood: "Bairro A",
      state: "São Paulo"
    },
    {
      id: 456,
      name: "Renato2",
      email: "renato1@email1",
      password: "123452",
      street: "Rua Def",
      number: 12,
      neighborhood: "Bairro B",
      state: "Minas Gerais"
    },
    {
      id: 789,
      name: "Renato3",
      email: "renato2@email1",
      password: "777777",
      street: "Rua DGhi",
      number: 55,
      neighborhood: "Bairro FF",
      state: "Minas"
    }

  ],
  loading: false,
  returnMessage: {
    message: ''
  },
};

// criamos typesUsers
export const typesUsers = {
  addUser: 'addUser',
  addUserSuccess: 'addUserSuccess',
  addUserError: 'addUserError',

  removeUser: 'removeUser',
  removeUserSuccess: 'removeUserSuccess',
  removeUserError: 'removeUserError',

  updateUser: 'updateUser',
  updateUserSuccess: 'updateUserSuccess',
  updateUserError: 'updateUserError',

  addAddress: 'addAddress',
  addAddressSuccess: 'addAddressSuccess',
  addAddressError: 'addAddressError',

  removeAddress: 'removeAddress',
  removeAddressSuccess: 'removeAddressSuccess',
  removeAddressError: 'removeAddressError',

  updateAddress: 'updateAddress',
  updateAddressSuccess: 'updateAddressSuccess',
  updateAddressError: 'updateAddressError',
};
//name, email, password, street, number, neighborhood, state
export const actionsUsers = {
  addUser: (name, email, password, street, number, neighborhood, state) => {
    return {
      type: typesUsers.addUser,
      payload: {
        id: Math.random(),
        name: name,
        email,
        password,
        street,
        number,
        neighborhood,
        state
      }
    }
  },
}

export const reducersUsers = (state = initialState, action) => {
  switch (action.type) {

    // add users
    case typesUsers.addUserSuccess:
      return {
        users: [...state.users, {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          street: action.payload.street,
          number: action.payload.number,
          neighborhood: action.payload.neighborhood,
          state: action.payload.state
        }],
        returnMessage: {
          message: "Usuário adicionado com sucesso!"
        }
      };
    case typesUsers.addUserError: {
      return {
        ...state,
        returnMessage: {
          message: action.payload.message
        }
      }
    }

    default:
      return state
  }
}