import { Navigate } from "react-router-dom";
import useAuthStore from "../hooks/useAuthStore";

const Authentication = ({ child }) => {
    const { accessToken } = useAuthStore();

    return accessToken? child: <Navigate to='/' replace></Navigate>;
};

export default Authentication;
