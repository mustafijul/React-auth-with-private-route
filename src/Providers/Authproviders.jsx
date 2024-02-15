import { Children, createContext, useState } from "react";
import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const Authproviders = ({ children }) => {
  // Declaring a state
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    // here we are sending the values in firebase
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authproviders;

Authproviders.PropTypes = {
  children: PropTypes.node,
};
