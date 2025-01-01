import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
      <div className="flex p-4 bg-slate-600 min-w-full rounded-md items-center">
        <button className="btn btn-secondary">Latest</button>
        <h2>
          <Marquee pauseOnHover={true}>
            Amar Shonar Bangla Ami{" "}
            <Link className="underline" to={"/"}>
              TOMAI
            </Link>{" "}
            Valobashui....................... Hover your mouch here to go my
            Link{" "}
            <Link to={"/"} className="underline">
              Home Page
            </Link>
          </Marquee>
        </h2>
      </div>
    );
};

export default BreakingNews;