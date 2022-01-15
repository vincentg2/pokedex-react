import Header from 'src/components/Header';
import Pokedex from 'src/components/Pokedex';
import Types from 'src/components/Types';
import Pokemon from 'src/components/Pokemon';
import { Routes, Route } from 'react-router-dom';
import data from 'src/data/pok';

function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex pokedex={data} />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/type" element={<Types />} />
      </Routes>
    </div>
  );
}

export default App;
