import { Children, createContext } from "react";
import PropTypes from 'prop-types'; 
const AuthContext = createContext(null)

const Authproviders = ({children}) => {

    const authInfo = {name : "Tamim shikder"};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;