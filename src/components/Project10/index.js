import { useState, useRef, useEffect } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocal = () => {
  let localStorageList = localStorage.getItem("grocery-list");
  if (localStorageList) {
    return JSON.parse(localStorage.getItem("grocery-list"));
  }
  return [];
};

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocal);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const inputContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please add an item", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, title: name };
          return item;
        })
      );
      showAlert(true, "item has been edited", "success");
      setName("");
      setIsEditing(false);
    } else {
      setList([...list, { title: name, id: new Date().getTime().toString() }]);
      showAlert(true, `"${name}" has been added`, "success");
      setName("");
    }
  };
  const showAlert = (show = true, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const handleClear = () => {
    showAlert(true, "Grocery list has been emptied", "danger");
    setList([]);
  };
  const handleEdit = (id) => {
    setIsEditing(true);
    inputContainer.current.focus();
    const specificItem = list.filter((item) => item.id === id);
    setEditId(id);
    setName(specificItem[0].title);
  };

  const handleDelete = (id) => {
    const name = list.filter((item) => item.id === id);
    showAlert(true, `"${name[0].title}" has been removed`, "danger");
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("grocery-list", JSON.stringify(list));
  }, [list]);

  return (
    <div id='ten'>
      <section className='section-center'>
        <div className='grocery-form'>
          {alert.show && (
            <Alert {...alert} list={list} removeAlert={showAlert} />
          )}
          <h3>grocery bud</h3>
          <form className='form-control' onSubmit={handleSubmit}>
            <input
              type='text'
              className='grocery'
              value={name}
              ref={inputContainer}
              onChange={(e) => setName(e.target.value)}
              placeholder='e.g. bread'
            />
            <button className='submit-btn'>{isEditing ? "edit" : "add"}</button>
          </form>
        </div>

        {list.length > 0 && (
          <div className='grocery-center'>
            <div className='grocery-list'>
              {list.map((item) => {
                return (
                  <List
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              })}
            </div>
            <button className='clear-btn' onClick={handleClear}>
              clear items
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GroceryBud;
