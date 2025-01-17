import { useContext } from "react";
import { CreatedContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(CreatedContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }
    
    if( user ) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRout;
PrivetRout.propTypes = {
    children: PropTypes.object
}
