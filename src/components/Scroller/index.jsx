import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Scroller = () => {
    const { pathname } = useLocation();
    const pathnamesNotScroll = [];

    useEffect(() => {
        if (!pathnamesNotScroll.includes(pathname)) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
};
