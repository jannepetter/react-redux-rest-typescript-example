import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { initializer } from './reducers/countryReducer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Region from './components/Region';
import Menubar from './components/MenuBar';
import Country from './components/Country';
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/BackDrop';
import Info from './components/Info';

interface Props {
  initializer: any;
  countries: any;
}

const App: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');
  const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(initializer());
  }, [dispatch]);

  const toggleSideDrawer = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <div>
      <Router>
        <SideDrawer sideDrawerOpen={sideDrawerOpen}></SideDrawer>
        <BackDrop
          sideDrawerOpen={sideDrawerOpen}
          toggleSideDrawer={toggleSideDrawer}
        ></BackDrop>
        <div className="header"></div>
        <Menubar
          toggleSideDrawer={toggleSideDrawer}
          setSearch={setSearch}
        ></Menubar>
        <Route exact path="/">
          <Info />
        </Route>
        <Route exact path="/Africa">
          <Region search={search} filter="Africa" />
        </Route>
        <Route exact path="/Europe">
          <Region search={search} filter="Europe" />
        </Route>
        <Route exact path="/Americas">
          <Region search={search} filter="Americas" />
        </Route>
        <Route exact path="/Asia">
          <Region search={search} filter="Asia" />
        </Route>
        <Route exact path="/Oceania">
          <Region search={search} filter="Oceania" />
        </Route>
        <Route exact path="/All">
          <Region search={search} filter="All" />
        </Route>
        <Route
          exact
          path="/country/:name"
          render={props => <Country {...props} />}
        />
      </Router>
    </div>
  );
};
const mapDispatchToProps = {
  initializer
};
const mapStateToProps = (state: any) => {
  return {
    countries: state.countries
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
