import React from 'react';
import PetList from './PetList';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

//I'm not sure i understood the spec here. I really have to look this concept over with some guidance.
//

const Root = () => {
  React.useEffect(() => {
    const { data } = fetch('api/pets'); //specs say use axios, but axios was not imported
  }, []);

  //I got stuck here and could not go on further. I will be revisiting this in either a morning review or office hours.

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={samplePets} />
    </>
  );
};

export default Root;
