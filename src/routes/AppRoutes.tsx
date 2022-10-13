import { Outlet, NavLink } from 'react-router-dom';
import logo from '../logo.svg'

export const AppRoutes = () => {
  return (
    <>
                <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Outlet />

            </div>
    </>
  )
}
