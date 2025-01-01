import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSitebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])

    return (
      <div>
        <h2 className="font-bold text-black">All Categories</h2>
        <div>
            {
                categories.map(category => <Link to={`/category/${category.name}`} className="block p-4 " key={category.id}>{category.name}</Link>)
            }
        </div>
      </div>
    );
};

export default LeftSitebar;