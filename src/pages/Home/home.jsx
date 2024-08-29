import Navbar from "../../Components/Navbar/navbar";
import Header from "../../Components/Header/header";
import "./home.css"
import Featured from "../../Components/Featured/featured";
import PropertyList from "../../Components/PropertyList/propertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/featuredProperties";
import MailList from "../../Components/MailList/mailList";
import Footer from "../../Components/Footer/footer";

const Home = () => {
    return ( 
        <>
            <div>
                <Navbar/>
                <Header />
                <div className="homeContainer">
                    <Featured />
                    <h1 className="homeTitle">Browse by property type</h1>
                    <PropertyList />
                    <h1 className="homeTitle">Homes guests love</h1>
                    <FeaturedProperties />
                    <MailList />
                    <Footer />
                </div>
            </div>
        </> 
    );
}
 
export default Home;