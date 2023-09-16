import { Route, Routes } from 'react-router-dom';
import './App.css';
import TareasPage from './pages/tareaspage';
import TareasForm from './pages/tareasform';
import NotFound from './pages/notfound';
import Navbar from './components/navbar';
import { TareaContextProvider } from './context/tareasContext';


function App() {
  return (
    <>
      <TareaContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<TareasPage />} />
          <Route path='/new' element={<TareasForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </TareaContextProvider>
    </>
  );
}

export default App;
