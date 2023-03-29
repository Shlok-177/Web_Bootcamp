import React from 'react'
import { Link, NavLink, NavNavLink } from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
  return (
    <>


    <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">

            <NavLink activeClassName = "active" to="/" className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">HomePage</NavLink>

            <NavLink activeClassName = "active" to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>

            <NavLink activeClassName="active" to="/contact/12" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink>

            <NavLink activeClassName="active" to="/user/shlok/20" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">User</NavLink>

          </div>
        </div>
      </div>
    </div>
  </div>
  </nav>


    </>
  )
}
