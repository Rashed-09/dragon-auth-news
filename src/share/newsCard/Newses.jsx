import { FaSave, FaRegEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import star from "../../assets/star.png";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Newses = ({ newses }) => {
  const { title, image_url, author, details, total_view, rating, _id } = newses;
  return (
    <div className="card shadow-xl my-5">
      {/* newscart profile bar */}
      <div className="flex justify-between rounded bg-gray-200 items-center py-4 px-8 text-gray-700">
        {/* news cart title bar left site */}
        <div className="flex gap-4 items-center">
          <img
            src={author.img}
            className="w-9 rounded-full"
            alt={author.name}
          />
          <div>
            <h3 className="">{author.name}</h3>
            <span className="text-sm font-normal">{author.published_date}</span>
          </div>
        </div>
        {/* news cart title bar right site */}
        <div className="flex gap-4 items-center">
          <FaSave />
          <CiShare2 />
        </div>
      </div>

      <div>
        <h2 className="card-title py-4 px-8">{title}</h2>
        <figure>
          <img className="card-body" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {
            details.length > 180 ? <p className="text-sm text-gray-400 font-normal">{details.slice(0, 180)} <Link to={`/newsDetails/${_id}`} className="text-blue-700">Read More...</Link></p>
            :
            <p>{details}</p>
          }
          <hr />
          <div className="card-actions mt-2 justify-between text-gray-400 font-normal text-base">
            <div className="flex items-center gap-3">
              <div className="flex">
                <img className="w-5 h-5" src={star} alt="star" />
                <img className="w-5 h-5" src={star} alt="star" />
                <img className="w-5 h-5" src={star} alt="star" />
                <img className="w-5 h-5" src={star} alt="star" />
                <img className="w-5 h-5" src={star} alt="star" />
              </div>
              <span>{rating.number}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaRegEye />
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newses;
Newses.propTypes = {
  newses: PropTypes.object
}