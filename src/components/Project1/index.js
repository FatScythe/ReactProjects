import { useState } from "react";
import data from "./data";
import List from "./List";
const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);

  const handleRemovePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div id='one'>
      <main>
        <div className='container'>
          <h3>{people.length} Birthday Reminder</h3>
          {people.map((person) => {
            const { id, age, image, name } = person;
            return (
              <List
                key={id}
                id={id}
                age={age}
                image={image}
                name={name}
                handleRemovePerson={handleRemovePerson}
              />
            );
          })}
          <button onClick={() => setPeople([])}>Clear All</button>
        </div>
      </main>
    </div>
  );
};

export default BirthdayReminder;
