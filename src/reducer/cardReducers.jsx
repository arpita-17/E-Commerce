const initialState = {
  card: [],
};
const Addcard = (state, payload) => {
  const itemIndex = state.card.findIndex((item) => item.id === payload.id);
  console.log("index", itemIndex);
  if (itemIndex >= 0) {
    state.card[itemIndex].qnty += 1;

    return {
      ...state,
      card: [...state.card],
    };
  } else {
    const temp = { ...payload, qnty: 1 };
    console.log("temp", temp);
    return {
      ...state,
      card: [...state.card, temp],
    };
  }
};

const Removecard = (state, payload) => {
  const deletCard = state.card.filter((item) => item.id !== payload);
  return {
    ...state,
    card: deletCard,
  };
};

const Removeqnty = (state, payload) => {
  const itemIndex_dec = state.card.findIndex((item) => item.id === payload.id);

  if (state.card[itemIndex_dec].qnty >= 1) {
    const dltitem = (state.card[itemIndex_dec].qnty -= 1);
    return {
      ...state,
      card: [...state.card],
    };
  } else if (state.card[itemIndex_dec].qnty === 1) {
    const deletCard = state.card.filter((item) => item.id !== payload);

    return {
      ...state,
      card: deletCard,
    };
  }
};
const cardReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return Addcard(state, action.payload);
    case "REMOVE_CARD":
      return Removecard(state, action.payload);
    case "REMOVE_QNTY":
      return Removeqnty(state, action.payload);

    default:
      return state;
  }
};

export default cardReducers;

// card :[shoes[0] id:1,mobile[1] id:2]
