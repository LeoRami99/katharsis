const Navbar = () => {
    return (<div className="navbar bg-base-100/50 top-0 sticky z-10 backdrop-blur-md">
        <div className="flex-1">
          <img src="/logo_katharsis.png" alt="Logo" className="w-60" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#bitacoras">Bitácoras</a></li>
            <li><a>Conexiones</a></li>
            <li><a>Matriz</a></li>
            <li><a>Pin 5</a></li>
          </ul>
        </div>
      </div>)
}
export default Navbar;