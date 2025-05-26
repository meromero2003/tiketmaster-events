import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../view/HOme";
import Detail from "../view/Detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    }
]);

const MyRoutes = () => <RouterProvider router={router}/>;


export default MyRoutes;