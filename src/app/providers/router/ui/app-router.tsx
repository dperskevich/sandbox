import { RouterConfig } from "@/shared/config/router/router-config"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (<Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(RouterConfig).map(({ element, path }) =>
                <Route key={path} path={path} element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="app-page">
                            {element}
                        </div>
                    </Suspense>
                } />
            )}
        </Routes>
    </Suspense>)
}

export default AppRouter;