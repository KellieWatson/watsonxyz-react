import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import './style/Home.css'
import Finance from "./Finance";
import Technology from "./Technology";
import DashBoard from "./DashBoard";
import AboutUs from "./AboutUs";
import {Card} from "react-bootstrap";
import HomeBody from "./HomeBody";
 function Home() {
    return (
        <div className="container">
        <BrowserRouter>
    <HomeBody />

        </BrowserRouter>

            <style jsx>{`

      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
export default Home;