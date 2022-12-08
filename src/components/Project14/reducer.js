const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_ITEM":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: new Date().getTime().toString(),
            text: action.payload.text,
            amount: +action.payload.amount,
          },
        ],
      };
  }
  //   return state;
  throw new Error("nah you know where you see that action.type");
};

export default reducer;
