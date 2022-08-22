import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList({ pets }) {
  const [species, setSpecies] = React.useState('all');

  function filterHandler(event) {
    setSpecies(event.target.value);
  }

  return (
    <>
      <div className="pet-list">
        {species === 'all'
          ? pets.map((pet, idx) => <SinglePet pet={pet} key={idx} />)
          : pets
              .filter((pet) => pet.species === species)
              .map((pet, idx) => <SinglePet pet={pet} key={idx} />)}
      </div>
      <div>
        <select onChange={filterHandler}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
        </select>
      </div>
    </>
  );
}

export default PetList;
