import {Card} from "react-bootstrap";
import {Link, BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Finance from "./Finance";
import Technology from "./Technology";
import DashBoard from "./DashBoard";
import AboutUs from "./AboutUs";

const HomeCardLayout = ()=> {
    return(<BrowserRouter>
    <div className="grid">
        <Card>
            <Link to="/Finance">
                <h3>Finance &rarr;</h3>
                <p>Practical financial guides, and discussions.</p>
            </Link>
        </Card>
        <Card>
            <Link to="/Technology" >

                <h3>Technology &rarr;</h3>
                <p>Leveraging technology to improve financial productivity and efficiency.</p>


            </Link>
        </Card>
        <Card>
            <Link to="/DashBoard">

                <h3>WatsonXYZ Dashboard &rarr;</h3>
                <p>Explore our teams finance and productivity tools in action.</p>

            </Link>
        </Card>
        <Card>
            <Link to="/AboutUs">

                <h3>About Us &rarr;</h3>
                <p>
                    Find out more about the WatsonXYZ Team and our mission.
                </p>

            </Link>
        </Card>
        {/*<Switch>*/}
        {/*    <Route exact path="/" className="Company-logo">{Home}</Route>*/}
        {/*    <Route exact path="/Finance" className="Route" component={Finance}></Route>*/}
        {/*    <Route exact path="/Technology" className="Route" component={Technology}></Route>*/}
        {/*    <Route exact path="/DashBoard" className="Route" component={DashBoard}></Route>*/}
        {/*    <Route exact path="/AboutUs" className="Route" component={AboutUs}></Route>*/}
        {/*</Switch>*/}
    </div></BrowserRouter>);
}
export default HomeCardLayout;