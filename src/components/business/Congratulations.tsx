/* eslint-disable react/no-unescaped-entities */
'use client'

import { useEffect, useState } from "react";

export default function Congratulations() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") || "{}"));
    }, []);


    if (!user.name) {
        return null;
    }
    return (
        <>
        <section className="bg-background text-primary px-6 py-12 text-center space-y-6 mb-16">
            <p className="text-3xl font-bold uppercase text-accent mb-12">CONGRATULATIONS, <span className="font-normal text-primary">{user.name}!</span></p>
            <p>
                {/* You've taken the BOLD STEP  */}
                <br/> I present to you....
                </p>
            

        </section>
        </>
    );
}