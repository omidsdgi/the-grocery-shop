import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";

function App() {

    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes >
                    <Route index element={<Navigate replace to='dashboard'/> } />
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
