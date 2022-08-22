import React from 'react';

function SinglePet({ pet }) {
  const [adopted, setAdopted] = React.useState(false);

  return (
    <div className={`single-pet${adopted ? ' adopted' : ''}`}>
      <h1>{pet.name}</h1>
      <h2>{pet.species}</h2>
      <p> {adopted ? 'Adopted!' : 'Available for Adoption!'}</p>
      <p>{pet.description}</p>
      <button onClick={() => setAdopted(!adopted)}>Toggle Status</button>
    </div>
  );
}

export default SinglePet;
