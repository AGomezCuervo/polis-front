import { Router, Route } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import MainLayout from "@/layouts/MainLayout";

const AppRouter: Component = () => {
    return (
        <Router>
            <Route path="/" component={MainLayout}>
                <Route path="/" component={lazy(() => import("@/views/Home"))}/>
            </Route>
            <Route path="*404" component={lazy(() => import("@/views/NotFound"))}/>
        </Router>
    );
};

export default AppRouter;