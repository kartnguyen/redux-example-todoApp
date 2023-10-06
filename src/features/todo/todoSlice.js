const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "green" },
  ],
  filters: {
    status: "",
    colors: [],
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(), // Tạo giá trị ID ngẫu nhiên
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    }
    case "todos/removed": {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    }
    case "todos/markalldone": {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.completed === true ? item : { ...item, completed: true }
        ),
      };
    }
    case "todos/deleteallcompleted": {
      return {
        ...state,
        todos: state.todos.filter((item) => item.completed !== true),
      };
    }
    case "todos/deleteall": {
      return {
        ...state,
        todos: [],
      };
    }
    case "todos/toggle": {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    }
    case "todos/colored": {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, color: action.payload.color }
            : item
        ),
      };
    }
    case "filter/changestatus": {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload.status,
        },
      };
    }
    case "filter/changecolor": {
      return {
        ...state,
        filters: {
          ...state.filters,
          colors: state.filters.colors.map((item) => {
            item !== action.payload.color
              ? { ...item, a: action.payload.color }
              : !item;
          }),
        },
      };
    }

    // Xử lý các loại hành động khác

    default: {
      return state;
    }
  }
}
