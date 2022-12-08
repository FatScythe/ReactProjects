import {
  useEffect,
  useState,
  useReducer,
  useContext,
  createContext,
} from "react";
import cartList from "./data";
import reducer from "./reducer";

const ThirteenContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";
const InitialState = {
  loading: false,
  cart: cartList,
  amount: 0,
  total: 0,
};

const ThirteenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL" });
  }, [state.cart]);

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const handleToggle = (id, type) => {
    dispatch({ type: "TOGGLE", payload: { id, type } });
  };
  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "FETCHED", payload: cart });
  };

  return (
    <ThirteenContext.Provider
      value={{
        ...state,
        handleClearCart,
        handleRemoveItem,
        handleDecrease,
        handleIncrease,
        handleToggle,
      }}
    >
      {children}
    </ThirteenContext.Provider>
  );
};
export const useThirteenContext = () => {
  return useContext(ThirteenContext);
};
export default ThirteenProvider;
