import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from "./components/Routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={Component} />)}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
