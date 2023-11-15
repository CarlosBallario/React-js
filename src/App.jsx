
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Componets/NavBar/NavBar'

function App() {

  return (
    
      <div className="App">
        <NavBar />
       <ItemListContainer greeting='Bienvenidos a mi tienda' />
    
      </div>
      
     
     
    
  );
}

export default App
