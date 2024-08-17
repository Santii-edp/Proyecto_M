import React, {Fragment} from 'react';
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/login';
import Index from './paginas/auth/main';
import Stats from './paginas/auth/stats';
import Admin from './paginas/auth/adminF';
import Register from './paginas/auth/register';
import Producto from './paginas/auth/producto';
import Shopping from './paginas/auth/shoping';
import Regadmin from './paginas/auth/reg-admin';
import Forpassword from './paginas/auth/forg-password';
import Main from './paginas/auth/main';
import Catalog from './paginas/auth/catalog';
import Main2 from './paginas/auth/main2';




function App() {
  return (
    <Fragment>
      <Router>
        <Routes>

          <Route path='/' exact element={<Main2/>}>


          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
