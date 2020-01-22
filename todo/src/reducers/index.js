export const initialState = [
    
];

export const todoReducer = (state, action) => {
switch (action.type) {
    case "ADD_ITEM":
      return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
        }
      ];
    case "TOGGLE_COMPLETED":
        console.log('toggling', action.payload)
      return state.map(item => {
          if (item.id === action.payload){
              return {
                  ...item,
                  completed: !item.completed
              }
          }
          return item;
      });
    case "CLEAR_COMPLETED":
        return state.filter(item => {
            return item.completed === false;
        });
    default:
      return state;
  }
}