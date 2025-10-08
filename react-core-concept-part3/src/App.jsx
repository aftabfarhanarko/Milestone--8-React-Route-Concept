import { createContext } from 'react';
import './App.css';
import ProducatManaz from './Componentes/ProducatManaz/ProducatManaz';
import Flowers from './Componentes/Flower/Flowers';

export const Wordes = createContext("");

function App() {
  const world = "The React is Best Components Libery";

  return (
    <>
      <h1>This is React Single Form</h1>
      {/* <Wordes.Provider value={world}>
        <ProducatManaz />
      </Wordes.Provider> */}
      <Flowers></Flowers>
    </>
  );
}

export default App;
