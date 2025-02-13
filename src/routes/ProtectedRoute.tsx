// import React, { ReactNode, useEffect } from "react";
// import { useAuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router";

// interface ProtectedRouteProps {
//     children: ReactNode
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const { token } = useAuthContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/");
//     }
//   }, [token]);
  
//   return <>{children}</>;
// };

// export default ProtectedRoute;
