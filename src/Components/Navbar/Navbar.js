import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="Sidebar">
        <div className="Sidebar__container">
          <NavLink exact className="Sidebar_link" to="/id0">Мой профиль</NavLink>
          <NavLink exact className="Sidebar_link" to="/friends">Друзья</NavLink>
          <NavLink exact className="Sidebar_link" to="/videos">Видео</NavLink>
          <NavLink exact className="Sidebar_link" to="/music">Музыка</NavLink>
          <NavLink exact className="Sidebar_link" to="/messages">Сообщения</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;