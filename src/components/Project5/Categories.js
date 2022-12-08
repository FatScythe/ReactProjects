const Categories = ({ categories, filterCategories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterCategories(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
