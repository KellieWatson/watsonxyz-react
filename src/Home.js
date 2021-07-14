import { Link, BrowserRouter } from 'react-router-dom';
import './style/Home.css'
 function Home() {
    return (
        <div className="container">
        <BrowserRouter>
            <main>
                <h1 className="title">
                    <a href="https://watsonxyz.com">WatsonXYZ</a>
                </h1>

                <p className="description">
                    Transforming Lives and Expanding Human Potential
                </p>

                <div className="grid">
                    <Link to="/finance">
                        <a className="card">

                            <h3>Finance &rarr;</h3>
                            <p>Practical financial guides, and discussions for the everyday person.</p>

                        </a>
                    </Link>
                    <Link to="/technology">
                        <a className="card">
                            <h3>Technology &rarr;</h3>
                            <p>Leveraging technology to improve financial productivity and efficiency.</p>

                        </a>
                    </Link>
                    <Link to="/dashboard">
                        <a
                            className="card"
                        >
                            <h3>WatsonXYZ Dashboard &rarr;</h3>
                            <p>Explore our teams finance and productivity tools in action.</p>
                        </a>
                    </Link>

                    <Link to="/about-us">
                        <a
                            className="card"
                        >
                            <h3>About Us &rarr;</h3>
                            <p>
                                Find out more about the WatsonXYZ Team and our mission.
                            </p>
                        </a>
                    </Link>
                </div>
                <p className="description">
                    Learn to Produce then Produce to Learn
                </p>
            </main>
        </BrowserRouter>
            <footer>
                <a
                    href="https://watsonxyz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    {' '}WatsonXYZ
                </a>
            </footer>

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