import type { JSX, ReactNode } from 'react';
import { NavLink } from "react-router";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
    return (
        <div>
            <div className='flex justify-around bg-blue-600'>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "py-2 px-5 bg-blue-950 text-amber-50" : "py-2 px-5 bg-blue-400 text-amber-50"
                } >
                    Home
                </NavLink>
                <NavLink to='/favorites' className={({ isActive }) =>
                    isActive ? "py-2 px-5 bg-blue-950 text-amber-50" : "py-2 px-5 bg-blue-300 text-amber-50"
                }>
                    Favourites
                </NavLink>
                <NavLink to='/character' className={({ isActive }) =>
                    isActive ? "py-2 px-5 bg-blue-950 text-amber-50" : "py-2 px-5 bg-blue-300 text-amber-50"
                }>
                    Characters Detail
                </NavLink>
            </div>
            {children}
        </div >
    )
}

export default MainLayout