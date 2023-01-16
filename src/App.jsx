import React from 'react';
import { Timer } from './components/Timer';
import { BgVideo } from './components/BgVideo';
import { VolumeRange } from './components/VolumeRange';
import { InfoWindow } from './components/InfoWindow';

function App() {

  return (

    <div className="App">
      <h1 className="absolute w-full my-5 font-extrabold text-center text-2xl md:text-4xl">GOOD MEDITATION</h1>
      <InfoWindow/>
      <BgVideo/>
      <section className="md:flex justify-evenly items-center h-screen">
        <VolumeRange/>
        <Timer/>
      </section>
    </div>
  );
}

export default App;
