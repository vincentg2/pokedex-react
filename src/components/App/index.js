import Header from 'src/components/Header';
import Pokedex from 'src/components/Pokedex';
import Types from 'src/components/Types';
import Pokemon from 'src/components/Pokemon';
import { Routes, Route } from 'react-router-dom';
import { getTypes } from 'src/selector';
import data from 'src/data/pok';

function App() {
  const types = getTypes(data);
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex pokedex={data} />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/type" element={<Types types={types} />} />
      </Routes>
    </div>
  );
}

export default App;
