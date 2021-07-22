import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomeCardLayout = ()=> {
    return(
    <div className="grid">
        <Card>
            <Link to="/Finance">
                <h3>Finance &rarr;</h3>
                <p>Practical financial guides, and discussions.</p>
            </Link>
        </Card>
        <Card>
            <Link to="/Technology">

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
    </div>)
}
export default HomeCardLayout;