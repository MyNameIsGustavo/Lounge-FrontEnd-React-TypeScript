import { RegistroAdmin } from './paginas/admin/registro/registro-admin';
import { RegistroCliente } from "./paginas/cliente/registro-cliente";
import { Login } from './paginas/paginaInicial-login';
import { HomeAdmin } from './paginas/admin/home/home-admin';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />

        <Route path="/RegistroAdmin" Component={RegistroAdmin} />
        <Route path="/RegistroCliente" Component={RegistroCliente} />
        <Route path="/HomeAdmin" Component={HomeAdmin} />
      </Routes>
    </BrowserRouter>

  )
}