import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Character from './page/character/character';
import Main from './page/main/main';
import './App.css';

function App() {
  return (
    <section className='bg-slate-700'>
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path='character/:id' element={<Character />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
