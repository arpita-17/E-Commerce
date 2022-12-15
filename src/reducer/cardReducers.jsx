

const initialState = {
  card: [],
};
const Addcard = (state, payload) => {

    const itemIndex = state.card
//   return {
//     ...state,
//     card: [...state.card, payload],
//   };
};

const Removecard=(state,payload)=>{
    const deletCard= state.card.filter((item)=>item.id !== payload)
    return{
        ...state,
        card:deletCard
    }
}
const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return Addcard(state, action.payload);
    case "REMOVE_CARD":
      return Removecard(state, action.payload);
    default:
      return state;
  }
};

export default cardReducers;
