import Basic from "./views/Basic";
import HomePage from "./views/HomePage";

export default [
    {
        private: true,
        routeProps: {
            path: "/",
            exact: true,
        },
        page: Basic,
    },
    {
        private: true,
        routeProps: {
            path: "/HomePage",
            exact: true,
        },
        page: HomePage,
    },
]