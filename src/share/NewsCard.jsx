import { useLoaderData } from "react-router-dom";
import Newses from "./newsCard/Newses";

const NewsCard = () => {
  const newses = useLoaderData()
    return (
      <div>
        {
          newses.map(news => <Newses key={news._id} newses={news}></Newses>)
        } 
      </div>
    );
};

export default NewsCard;