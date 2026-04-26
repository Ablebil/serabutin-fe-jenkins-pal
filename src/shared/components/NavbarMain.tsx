import { Link } from "react-router"

// const user = {
//   name: "Budi"
// } as const

const NavbarMain = () => {
  return (
    <nav className="w-full h-14.5 px-8 flex items-center justify-center">
      {/* logo */}
      <div className="flex gap-3">
        <img src="/logo.webp" alt="logo" />
        <h1 className="font-inter font-bold text-xl">SERABUTIN</h1>
      </div>

      {/* profile link */}
      <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default NavbarMain