import React from 'react'
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';
export const AppRoutes = () => {
    return (

        <Routes>
            {routes.public.map(({ path, Component }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component/>}
                />
            ))}
        </Routes>

    );
}
