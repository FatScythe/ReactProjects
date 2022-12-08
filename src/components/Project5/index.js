import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";
const allCategories = ["all", ...new Set(data.map((datum) => datum.category))];

const Menus = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newMenuItems = data.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  };
  return (
    <main id='five'>
      <section className='menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <div className='section-center'>
          {menuItems.map((item) => (
            <Menu {...item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menus;
