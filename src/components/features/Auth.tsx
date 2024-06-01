'use client';

import {FC, ReactNode, useState} from "react";

export const Auth: FC<{ children: ReactNode, news: ReactNode }> = ({children, news}) => {
    const [auth, setAuth] = useState<boolean>(false);


    const toggleAuth = () => {
        setAuth(auth => !auth);
    }
    return (
        <>
            <button className={'bg-blue-500 text-white p-2 rounded'} onClick={toggleAuth}>Toggle Auth</button>

            <div>
                {auth ? news : children}
            </div>


        </>
    )
}