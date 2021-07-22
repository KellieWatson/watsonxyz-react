
import HomeCardLayout from "./HomeCardLayout";
function HomeBody(){
    return( <main>
        <h1 className="title">
            <a href="https://watsonxyz.com">WatsonXYZ</a>
        </h1>

        <p className="description">
            Transforming Lives and Expanding Human Potential
        </p>
        <div>
        <HomeCardLayout />
        </div>
        <p className="description">
            Learn to Produce  &rarr;  Produce to Learn
        </p>
    </main>);
}
export default HomeBody;