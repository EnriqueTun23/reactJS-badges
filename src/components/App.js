import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Este es el layaut que se utiliza para llevar eñ baner a todos en este caso 
import Layout from './Layout';
// Paginas 
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailContainer';
import StarWars from '../pages/StarWars';
import NotFound from '../pages/NotFound';


function App() {
  return (
    // instalar para usar el router react-router-dom
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
          <Route exact path="/starWars" component={StarWars} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
