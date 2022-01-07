import { NavLink } from "react-router-dom";
  
function Navbar() {
    return (
        <header className="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white text-gray-600">
            <nav aria-label="Global" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center  flex-wrap sm:flex-nowrap  ">
                    <div className="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:mr-auto flex items-center">
                        <NavLink to="/leadership" className="hover:text-gray-900">Роли менеджера</NavLink>
                        <NavLink to="/group-roles" className="hover:text-gray-900 mx-6 ">Командные роли</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;