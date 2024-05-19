import React from 'react'
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';
import { Scroller } from '../components/Scroller';

export const AppRoutes = () => {
    return (
        <>
            <Scroller />
            <Routes>
                {routes.public.map(({ path, Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                ))}
            </Routes>
        </>
    );
}
