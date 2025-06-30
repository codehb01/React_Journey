import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Leaf,
  Globe,
  Home,
  CloudSunRain,
  TrendingUp,
  Zap,
} from "lucide-react";

function Header() {
  // for svgs
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Weather", path: "/dashboard", icon: Globe },
    { name: "Forecast", path: "/forecast", icon: CloudSunRain },
  ];

  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white/30 backdrop-blur border-gray-200 px-4 lg:px-7  py-2.5 rounded-2xl">
        <div className="flex flex-wrap justify-between items-center  mx-auto max-w-7xl">
          <Link to="/" className="flex items-center space-x-2 group">
            <h2 className="font-4xl font-bold ">Climate</h2>
          </Link>

          {/* pages navigation */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto space-x-1 ">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2  px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? `bg-gradient-to-br from-blue-700 to-blue-100 text-black shadow-lg`
                        : `text-gray-700 `
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Login and Signin buttons */}
          <div className="flex justify-end  ">
            <Link
              to=""
              className="bg-blue-700 px-3 py-1 rounded-xl text-white font-semibold  hover:bg-blue-500 cursor-pointer transition 100ms"
            >
              Login
            </Link>
            <Link
              to=""
              className="bg-gray-300 px-2 py-1 rounded-xl ml-3 text-black font-semibold  hover:bg-gray-200 cursor-pointer transition 100ms"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
