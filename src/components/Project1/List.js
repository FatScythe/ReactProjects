const List = ({ id, name, age, image, handleRemovePerson }) => {
  return (
    <div className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>
          {name}, {age}
        </h4>
      </div>

      <div className='btn' onClick={() => handleRemovePerson(id)}>
        remove
      </div>
    </div>
  );
};

export default List;
