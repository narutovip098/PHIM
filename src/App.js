import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import TrangChu from './pages/TrangChu/TrangChu';
import { HomeTemplate } from './templates/HomeTemplate';
import DemoHOC from './pages/HOC/DemoHOC';
import { AdminTemplate } from './templates/AdminTemplate';
import FilmsManager from './pages/Admin/FilmsManager.js/FilmsManager';
import UserManager from './pages/Admin/UsersManager/UserManager';
import Booking from './pages/Booking/Booking';
function App() {
  return (
    <BrowserRouter>

      {/* <Home abc="123"/> */}
      <Switch>
        <HomeTemplate exact path='/home' Component={Home} />
        <HomeTemplate exact path='/contact' Component={Contact}/>
        <HomeTemplate exact path='/about' Component={About} />
        <HomeTemplate exact path='/hoc' Component={DemoHOC} />
        <HomeTemplate exact path='/login' Component={Login} />
        <HomeTemplate exact path='/detail/:id' Component={Detail} />
        <HomeTemplate exact path='/profile' Component={Profile} />
        <HomeTemplate exact path='/trangchu' Component={TrangChu} />
        <AdminTemplate exact path='/admin/films' Component={FilmsManager} />
        <AdminTemplate exact path='/admin/users' Component={UserManager} />
        <Route exact path='/booking/:maLichChieu' render={
          (propsRoute) =>{
            return <Booking {...propsRoute}/>
          }}/>
        <HomeTemplate exact path='/' Component={Home} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
