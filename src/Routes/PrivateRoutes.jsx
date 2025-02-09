import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../App";

function PrivateRoutes({ children }) {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info w-20"></span></div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={{ from: location?.pathname }} to="/login"></Navigate>
    )
}

export default PrivateRoutes
