// import logo from './logo.svg';
import './App.css';
import NavBar from './components/ItemListContainer/NavBar';
import Boton from './components/ItemListContainer/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
    
    <NavBar/>
    <Boton/>

    <div>
            <ItemListContainer greeting="¡Nuestros Productos!" />
        </div>
    
    </>  
   
  )
 
    

}

export default App;
