const initialState = {
  todos: [],
  filters: {
    status: "",
    colors: "",
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
      const colorLength = state.filters.colors.length;
      const updatedColors = [...state.filters.colors];

      if (colorLength > 0) {
        const colorIndex = updatedColors.indexOf(action.payload.color);

        if (colorIndex === -1) {
          updatedColors.push(action.payload.color);
        } else {
          updatedColors.splice(colorIndex, 1);
        }
      } else {
        updatedColors.push(action.payload.color);
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          colors: updatedColors,
        },
      };
    }

    // Xử lý các loại hành động khác

    default: {
      return state;
    }
  }
}
