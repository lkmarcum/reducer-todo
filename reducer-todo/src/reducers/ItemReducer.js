export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };

    case "TOGGLE_ITEM":
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };

    default:
      return state;
  }
};
