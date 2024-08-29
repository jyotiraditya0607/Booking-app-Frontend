import { Link } from "react-router-dom";
import "./searchItem.css";
// "https://cf.bstatic.com/xdata/images/hotel/square600/331568749.webp?k=5b96314c7c62caa457fdfa1765674e20b04db87f8f81b4b96739a5ca3a926d08&o="

export const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                {item.desc}
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Includes Taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  );
}
