import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

async function Header() {
    const session = await getServerSession(authOptions);
    if (session)
        return (
            <header className="sticky top-0 z-50 bg-white flex justify-between items-center shadow-sm p-10">
                <div className="flex space-x-2">
                    <Image
                        src={session.user?.image!}
                        alt="Logo"
                        width={50}
                        height={10}
                        className="rounded-full mx-2 object-contain"
                    />
                    <div>
                        <p className="text-blue-400">Logged in as: </p>
                        <p className="font-bold text-lg">{session.user?.name}</p>
                    </div>
                </div>
                <LogoutButton />
            </header>
        );
    return (
        <header className="sticky top-0 z-50 bg-white flex justify-center items-center shadow-sm p-10">
            <div className="flex flex-col items-center space-y-5">
                <div className="flex space-x-2 items-center">
                    <Image src="https://links.papareact.com/jne" alt="Logo" width={50} height={10} />
                    <p className="text-blue-400">Welcome to Meta Messenger</p>
                </div>
                <Link
                    href="/auth/signin/"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In
                </Link>
            </div>
        </header>
    );
}

export default Header;
