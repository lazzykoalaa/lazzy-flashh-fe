import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
    const AuthRoute = () => {
        const navigate = useNavigate();
        const token = localStorage.getItem('access_token');

        if (!token) {
            navigate('/login');
            return null;
        }

        return <Component />;
    };

    return AuthRoute;
};

export default withAuth;
