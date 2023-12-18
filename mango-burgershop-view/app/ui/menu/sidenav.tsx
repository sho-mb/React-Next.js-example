import NavLink from "./nav-link"
export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
    <div className="text-center w-32 mx-auto md:w-40 md:mx-auto">
      <p className="font-bold">Menu bar</p>
    </div>
    <NavLink />
  </div>
  )
}