import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import BirthdayReminder from "./components/Project1";
import Tours from "./components/Project2";
import Reviews from "./components/Project3";
import Questions from "./components/Project4";
import Menu from "./components/Project5/";
import Jobs from "./components/Project6";
import Slider from "./components/Project7";
import WordGenerator from "./components/Project8";
import ColorGenerator from "./components/Project9";
import GroceryBud from "./components/Project10";
import NavbarToggle from "./components/Project11";
import Submenu from "./components/Project12";
import Cart from "./components/Project13";
import ExpenseTracker from "./components/Project14";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/birthday' element={<BirthdayReminder />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/word' element={<WordGenerator />} />
          <Route path='/color' element={<ColorGenerator />} />
          <Route path='/grocery' element={<GroceryBud />} />
          <Route path='/navbar' element={<NavbarToggle />} />
          <Route path='/submenu' element={<Submenu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/tracker' element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
      {/* <BirthdayReminder /> */}
      {/* <Tours /> */}
      {/* <Reviews /> */}
      {/* <Questions /> */}
      {/* <Menu /> */}
      {/* <Jobs /> */}
      {/* <Slider /> */}
      {/* <WordGenerator /> */}
      {/* <ColorGenerator /> */}
      {/* <GroceryBud /> */}
      {/* <Navbar /> */}
      {/* <Submenu /> */}
      {/* <Cart /> */}
      {/* <ExpenseTracker /> */}
    </div>
  );
}

export default App;
