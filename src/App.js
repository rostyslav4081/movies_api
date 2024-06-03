import React, { useEffect } from 'react';

import './App.css';
import {BaseLayout} from "./layouts";
import { Home,MovieDetails } from "./pages";
import {Switch, Route, useHistory, Redirect} from "react-router-dom";



function App() {

  const history = useHistory();
  return (
      <BaseLayout>
          <Switch>
              <Route path="/" exact>
                  <Home/>
              </Route>
              <Route path="/movie/:id">
                  <MovieDetails/>
              </Route>
              {/*<Redirect to="/"/>*/}
              <Route>
                  <h1>PAGE NOT FOUND <button  onClick={() => history.push("/")}>Go home</button></h1>
              </Route>
          </Switch>

      </BaseLayout>
  );
}

export default App;
