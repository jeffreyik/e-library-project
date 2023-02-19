import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from '../assets/profileimg.svg'
import { useAuthValue } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Sidebar = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuthValue()

  const logout = () => {
    let prompt = confirm('Are you sure you want to log out?')
    if (prompt) {
      console.log('log out')
      signOut(auth)
    } else {
      console.log("don't")
    }
  }

  return (
    <aside className="side-bar">
        <div className="profile">
          <img src={Avatar} alt="" className="profile-img" />
          <div className="profile-name">{currentUser?.email}</div>
        </div>
        <nav className="nav-links">
          <NavLink to='/' className="nav-link">
            Home
          </NavLink>
          <NavLink to='/books' className="nav-link">
            Books
          </NavLink>
          <NavLink to='/category' className="nav-link">
            Category
          </NavLink>
          <div className="nav-link" onClick={logout}>
            Logout
          </div>
        </nav>
      </aside>  
  )
}

export default Sidebar;