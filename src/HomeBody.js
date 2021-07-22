import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomeBody(){
    return( <main>
        <h1 className="title">
            <a href="https://watsonxyz.com">WatsonXYZ</a>
        </h1>

        <p className="description">
            Transforming Lives and Expanding Human Potential
        </p>

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
        </div>
        <p className="description">
            Learn to Produce  &rarr;  Produce to Learn
        </p>
    </main>);
}
export default HomeBody;