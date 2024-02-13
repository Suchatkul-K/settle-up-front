import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import NavBar from "../components/NavBar"

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <NavBar />
                <LoginPage />
            </>
        )
    },
])

export default function Router() {
    return <RouterProvider router={router}/>
}