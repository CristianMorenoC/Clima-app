import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './componentes/Header';
import Inicio from './Rutas/Inicio/Inicio';
import Detalles from './Rutas/informacion/Detalles';
import Error404 from './componentes/error404/Error404';

//context
import { CardProvider } from './context/CardContext';

function App() {

  return (
    <CardProvider>
      <BrowserRouter>
        <Header />
          <div className="contenedor-rutas flex justify-center flex-wrap">
                <Switch>
                  <Route path="/" exact={true} component={Inicio} />
                  <Route path="/information" component={Detalles} />
                  <Route path="*" component={Error404} />
                </Switch>
          </div>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
