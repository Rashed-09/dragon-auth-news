import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            this is News Details{id}
        </div>
    );
};

export default NewsDetails;