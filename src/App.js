import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
      <>
      <div> 
      <Navbar dark color="primary">  
      <div className="container"> 
      <NavbarBrand href="/">Latest React Course</NavbarBrand>
      
      </div>
      </Navbar> 
      <Menu />
      </div>
      
      </>
  );
}

export default App;
