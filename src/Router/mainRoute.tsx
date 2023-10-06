import {createBrowserRouter} from "react-router-dom"
import Layout from "../Component/Common/Layout"
import GroupPage from "../Pages/GroupPage"


const MainRoute = createBrowserRouter ([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<GroupPage/>
            }
        ]
    }
])

export default MainRoute