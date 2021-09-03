import {BrowserRouter, Switch,Route} from "react-router-dom";
import HomeCardLayout from "./HomeCardLayout";
import Home from "./Home";
import Finance from "./Finance";
import Technology from "./Technology";
import DashBoard from "./DashBoard";
import AboutUs from "./AboutUs";
function HomeBody(){
    return( <main><BrowserRouter>
        <h1 className="title">
            <a href="https://watsonxyz.com">WatsonXYZ</a>
        </h1>

        <p className="description">
            Transforming Lives and Expanding Human Potential
        </p>
        <div>
        <HomeCardLayout />
            <Switch>
                <Route path="/Finance" className="Route" component={Finance}></Route>
                <Route path="/Technology" className="Route" component={Technology}></Route>
                <Route path="/DashBoard" className="Route" component={DashBoard}></Route>
                <Route path="/AboutUs" className="Route" component={AboutUs}></Route>
            </Switch>
        </div>
        <p className="description">
            Learn to Produce  &rarr;  Produce to Learn
        </p>
        </BrowserRouter>
    </main>);
}
export default HomeBody;