import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ item, id, title, handleDelete, handleEdit }) => {
  return (
    <article className='grocery-item'>
      <p className='item-title'>{item.title}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={() => handleEdit(item.id)}
        >
          <FaEdit />
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={() => handleDelete(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
