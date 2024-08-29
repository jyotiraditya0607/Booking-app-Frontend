import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { BACKEND_URL } from "../../config";

const Featured = () => {

    const { data, loading, error } = useFetch(`${BACKEND_URL}/hotels/countByCity?cities=Mumbai,Chennai,Kolkata`);

    return ( 
        (loading === true)? "Loading please wait..." : <><div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2>Mumbai</h2>
                    <h3>{data[0]} properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2>Chennai</h2>
                    <h3>{data[1]} properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h2>Kolkata</h2>
                    <h3>{data[2]} properties</h3>
                </div>
            </div>
        </div> </>
    );
}
 
export default Featured;