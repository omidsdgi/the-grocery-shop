import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import AppLayout from "./ui/AppLayout.tsx";
import Product from "./pages/Product.tsx";
import Settings from "./pages/Settings.tsx";
import Users from "./pages/Users.tsx";
import Menus from "./pages/Menus.tsx";

function App() {

    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes >
                    <Route element={<AppLayout/>}>
                    <Route index element={<Navigate replace to='dashboard'/> } />
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="product" element={<Product/>} />
                    <Route path="menus" element={<Menus/>} />
                    <Route path="users" element={<Users/>} />
                    <Route path="settings" element={<Settings/>} />
                    </Route>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
