import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (

<footer class="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">શ્લોક-માનવ ડેવલપર દલ</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/about" class="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link href="/" class="mr-4 hover:underline md:mr-6">Licensing</Link>
        </li>
        <li>
            <Link href="/contact" class="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>

  )
}
