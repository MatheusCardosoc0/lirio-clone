import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { api } from "../../libs/api";
import { setCurrentUser } from "../../redux/actions/CurrentUserAction";

const GuardedRoutes = ({ children, redirectTo }) => {
    const token = localStorage.getItem("authToken");

    const dispatch = useDispatch()
    const userName = useSelector(state => state.user.userName)

    const fetchUserData = (token) => async (dispatch) => {
        try {
            const response = await api.get(`/api/SignIn/${token}`);
            console.log(response.data)
            dispatch(setCurrentUser(response.data.userName));
        } catch (error) {
            localStorage.removeItem("authToken")
            window.location.reload()
        }
    }

    function setupAuthInterceptor(getToken) {
        api.interceptors.request.use(
            async config => {
                const token = localStorage.getItem("authToken");
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }

    useEffect(() => {
        if (token && !userName) {
            setupAuthInterceptor()
            dispatch(fetchUserData(token));
        }
    }, [token, dispatch, userName]);

    if (!token) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
};

export default GuardedRoutes