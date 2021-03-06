import {Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import './style/Header.css'
import Finance from './Finance';
import Technology from "./Technology";
import DashBoard from "./DashBoard";
import AboutUs from "./AboutUs";
import NavBar from './NavBar';
import Home from "./Home";
function Header(){
return(<div>
    <header><BrowserRouter>
    <NavBar/>
        <Switch>
            <Route exact path="/" className="Company-logo">{Home}</Route>
            <Route path="/Finance" className="Route" component={Finance}></Route>
            <Route path="/Technology" className="Route" component={Technology}></Route>
            <Route path="/DashBoard" className="Route" component={DashBoard}></Route>
        <Route path="/AboutUs" className="Route" component={AboutUs}></Route>
        </Switch>
    </BrowserRouter>
    </header>
</div>);
}
export default Header;