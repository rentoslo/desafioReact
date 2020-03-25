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

export const actionsUsers = {}

export const reducersUsers = (state = initialState, action) => {
  switch (action.type) { 

    default:
      return state
  }
}