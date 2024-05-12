'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'About', path: '/about'},
    {id: 3, name: 'Profile', path: '/profile'},
    {id: 4, name: 'Blog', path: '/blog'},
] as const

export default function Header() {

    const pathname = usePathname()

    return (
        <header className="bg-slate-700 p-3 shadow-2xl sticky top-0">
           <div className="container px-5">
                <nav className="flex">
                    <ul className="flex gap-8 flex-wrap">
                        {routes.map((route) => (

                            <li key={route.id}>
                                <Link 
                                    className={pathname === route.path ? 'active' : ''} 
                                    href={route.path}>{route.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                </nav>
           </div>
        </header>
    )
  
}