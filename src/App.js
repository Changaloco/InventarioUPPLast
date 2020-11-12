import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import register from './components/register';
import Navigation from './components/Navigation';
import login from './components/login';
import dashboard from "./components/dashboard/Dashboard";
import menuInventario from './components/inventario/mainInventario';
import formUsuarios from './components/adminUsuarios/formUsuarios';
function App() {
  return (
    <Router>
      
      <Route  path="/" exact component={Navigation} />
      <Route path="/" exact component={formUsuarios} />
      <Route path="/registro" exact  component={register} />
      <Route path="/menu" exact component={dashboard} />
      <Route path="/inventario" exact component={menuInventario} />
      <Route path="/test" exact component={formUsuarios} />

    </Router>
    
  );
}

export default App;
