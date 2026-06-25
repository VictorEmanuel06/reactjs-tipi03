import { Navigate } from 'react-router-dom';

const ProtecdRoute = ({ children, auth }) => {
    if (!auth) {
        return <Navigate to="/login" replace/>;
    }
    return children;
}

export default ProtecdRoute;