import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged IN" : "Logged Out")
    return useInRouterContext(AUthContext)
}
export default useAuth;