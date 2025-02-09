import { NavLink } from "react-router-dom"


const Header = () => {
    const link=<>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/listed'>Listed book</NavLink></li>
    <li><NavLink to='/pages'>Pages to read</NavLink></li>
    <li><NavLink to='/more'>See more books</NavLink></li>
    <li><NavLink to='/search'> Search</NavLink></li>
    </>
    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book List</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn border border-green-300 text-green-500">Sign in</a>
    <a className="btn border border-blue-300 text-blue-500">Sign up</a>
  </div>
</div>
        </div>
    );
};

export default Header;