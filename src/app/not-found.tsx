'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const path = usePathname();

    return (
        <>
        
            <h1 className='text-center'>Such page does not exist: 
                <span className='text-lg font-bold'>{path.replace('/', '')}</span>
            </h1>

            <Link className='text-cyan-700 underline' href='/'>Back to home</Link>
        
        </>
    )

}
