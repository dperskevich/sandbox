import { RouteProps } from "react-router-dom"
import { AboutPage } from "@/pages/about"
import { MainPage } from "@/pages/main"

export enum AppRoutes {
    Main = "main",
    About = "about"
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.Main]: "/",
    [AppRoutes.About]: "/about"
}

export const RouterConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePaths[AppRoutes.Main],
        element: <MainPage />
    },
    [AppRoutes.About]: {
        path: RoutePaths[AppRoutes.About],
        element: <AboutPage />
    }
}