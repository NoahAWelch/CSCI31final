import { TrophyIcon } from '@heroicons/react/24/solid';

const navbarList = [
    {
        title: 'home',
        href: '/',
    },

    {
        title: 'Geography',
        href: '/about',
    },

    {
        title: 'Science',
        href: '/contact',
    },

    {
        title: 'History',
        href: '/services',
    },

    {
        title: 'Pop Culture',
        href: '/products',
    },
]

export default function Navbar(){
    return (
    <div className="flex justify-center gap-3 m-3">
       <TrophyIcon className="h-16 w-16 text-blue-500 m-4" />
      {navbarList.map((listItem, index) => (
        <a key={index} href={listItem.href} className=" px-4 py-2 bg-blue-400 shadow-md rounded-xl grow transition-all active:bg-blue-800 hover:bg-blue-200">
            {listItem.title}
            </a>
       ))}
       </div>
       )
}
