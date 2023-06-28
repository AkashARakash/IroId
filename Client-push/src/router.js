import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Signup from "./Signup";
import Main from "./main";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/signup', element: <Signup/> },
    { path: '/main', element: <Main/> },
    
]);

export default router;