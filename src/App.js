import { Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './page/character/character';
import Main from './page/main/main';

function App() {
  return (
    <div className='bg-slate-700'>
      <div className="container mx-auto xl">
        <Routes>
          <Route index element={<Main />} />
          <Route path='character/:id' element={<Character />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
