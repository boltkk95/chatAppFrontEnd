import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  
  return 1 ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
