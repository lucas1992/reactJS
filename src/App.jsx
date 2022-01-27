import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      <>
        <NavBar />
        <ItemListContainer greeting="Texto provisional que luego reemplazaremos por nuestro catálogo" />
      </>
  );
}

export default App;
