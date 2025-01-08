import { Outlet } from "react-router-dom";
import LeftSitebar from "../share/LeftSitebar";
import NewsCard from "../share/NewsCard";
import RightSiteBar from "../share/RightSiteBar";
import BreakingNews from "./breakingNews/BreakingNews";
import Header from "./Header";
import Navbar from "./Navbar";

const Home = () => {
    return (
      <div className="space-y-3">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>

        <div className="grid md:grid-cols-4 gap-5">
          {" "}
          {/*left Right and middle Site*/}
          <div>
            <LeftSitebar></LeftSitebar>
          </div>
          <div className="md:col-span-2 font-bold text-black">
            <Outlet></Outlet>
          </div>
          {/* right site */}
          <div>
            <RightSiteBar></RightSiteBar>
          </div>
        </div>
      </div>
    );
};

export default Home;