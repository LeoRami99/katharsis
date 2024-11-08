const Navbar = () => {
  return (<div className="navbar bg-base-100/50 top-0 sticky z-20 backdrop-blur-md">
    <div className="flex-1">
      <img src="/logo_katharsis.png" alt="Logo" className="w-60" />
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-2">
        <li>
          <a href="#equipo-k" className="btn btn-outline btn-sm">Equipo K</a>
        </li>
        <li><a href="#bitacoras" className="btn btn-outline btn-sm">Bitácoras</a></li>
        <li><a href="#conexiones" className="btn btn-outline btn-sm">Conexiones</a></li>
        <li><a href="#matriz" className="btn btn-outline btn-sm">Matriz</a></li>
        <li><a className="btn btn-outline btn-sm">Pin 5</a></li>
      </ul>
    </div>
  </div>)
}
export default Navbar;