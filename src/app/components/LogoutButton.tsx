"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white p-2 rounded">
            Logout
        </button>
    );
}