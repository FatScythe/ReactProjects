const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);

    return { ...state, cart: newCart };
  }

  if (action.type === "TOGGLE") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increase") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "decrease") {
            return { ...item, amount: item.amount - 1 };
          }
        }

        return item;
      })
      .filter((item) => item.amount !== 0);

    return { ...state, cart: newCart };
  }

  if (action.type === "UPDATE_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (acc, curr) => {
        const { amount, price } = curr;
        acc.amount += amount;
        acc.total += amount * price;
        return acc;
      },
      { amount: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "FETCHED") {
    return { ...state, loading: false, cart: action.payload };
  }

  throw new Error("nah you know where you see that action.type");
};
export default reducer;
