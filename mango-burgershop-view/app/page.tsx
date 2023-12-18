import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className='flex items-center p-6 h-full min-h-screen'>
        <div className='flex-1 text-center text-orange-500 font-bold text-7xl '>
          <div className='m-auto'>Welcome to mango hamburger shop</div>
        </div>
        <div className='flex-1'>
          <Link 
            href="/menu"
            className='m-auto flex bg-orange-400 w-60 rounded-lg px-6 py-3 text-sm text-white transition-colors items-center font-medium hover:bg-orange-300 md:text-base gap-5 drop-shadow-xl'
          >
           <span>Check hamburgers</span><ArrowRightIcon className='w-5 h-5 text-white'/>
          </Link>
        </div>
      </div>
    </main>
  )
}
