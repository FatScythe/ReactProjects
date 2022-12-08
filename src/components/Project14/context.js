import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "./reducer";

const FourteenContext = createContext();
const InitialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Book", amount: -20 },
    // { id: 5, text: "gigs", amount: 500 },
  ],
};
const getLocalStorage = () => {
  let localStorageList = localStorage.getItem("transactions");
  if (localStorageList) {
    return JSON.parse(localStorage.getItem("transactions"));
  }
  return {};
};

const FourteenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const [list, setList] = useState(getLocalStorage());

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const handleAdd = (text, amount) => {
    dispatch({ type: "ADD_ITEM", payload: { text, amount } });
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
    setList({ ...JSON.parse(localStorage.getItem("transactions")) });
  }, [state]);

  return (
    <FourteenContext.Provider value={{ ...list, handleDelete, handleAdd }}>
      {children}
    </FourteenContext.Provider>
  );
};

export const useFourteenProvider = () => {
  return useContext(FourteenContext);
};

export default FourteenProvider;
