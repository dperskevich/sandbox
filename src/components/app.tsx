import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { classNames } from "../helpers/class-names";
import { AboutPageLazy } from "../pages/about/about.lazy";
import { MainPageLazy } from "../pages/main/main.lazy";
import { useTheme } from "../theme/use-theme";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (<div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Suspense fallback={<div>Loading...</div>} >
            <Routes>
                <Route path="/" element={<MainPageLazy />} />
                <Route path="/about" element={<AboutPageLazy />} />
            </Routes>
        </Suspense>
    </div>)
}

export default App;