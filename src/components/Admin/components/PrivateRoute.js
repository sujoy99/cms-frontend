import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/context";
//localstorage admin email
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem('adminEmail') === 'admin001@gmail.com' ? (
          <Component {...props} />
        ) : (
            
          <Redirect to="/" />
        );
      }}
    ></Route>
  );
};