import "./thirteen.css";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useThirteenContext } from "./context";

function Cart() {
  const { loading } = useThirteenContext();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default Cart;
