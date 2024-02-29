import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-blue-400 py-6">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-white mb-4 md:mb-0">© 2024 Your Company. All rights reserved.</div>
        <nav class="flex flex-wrap justify-center md:justify-end">
            <a href="#" class="text-white px-3 py-2 mx-1">Home</a>
            <a href="#" class="text-white px-3 py-2 mx-1">About</a>
            <a href="#" class="text-white px-3 py-2 mx-1">Services</a>
            <a href="#" class="text-white px-3 py-2 mx-1">Contact</a>
        </nav>
        </div>
        <div class="mt-4 md:mt-6 text-center md:text-right">
        <h3 class="text-white font-semibold mb-2">Subscribe to Newsletter</h3>
        <form class="flex justify-center md:justify-end">
            <input type="email" placeholder="Your email" class="border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none focus:border-blue-500" />
            <button type="submit" class="bg-white text-blue-400 px-4 py-2 rounded-r-md hover:bg-blue-500 hover:text-white transition duration-300">Subscribe</button>
        </form>
        </div>
    </div>
    </footer>

  )
}
