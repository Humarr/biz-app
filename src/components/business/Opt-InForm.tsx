/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";


export default function OptInForm() {
    const router = useRouter(); 

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.phone) {
            alert("Please fill in all fields");
            return;
        }
        console.log("Form submitted");
        console.log(user);
        setUser({
            name: user.name,
            email: user.email,
            phone: user.phone,
        });
        // TODO: Add form submission logic

        // Reset form
        e.currentTarget.reset();

        localStorage.setItem("user", JSON.stringify(user));

        router.push("/business/learn");
    };
    return (
        <section className="bg-primary text-white px-6 py-12 text-center space-y-6">
        <h3 className="text-2xl font-bold uppercase text-highlight">
          Get Your Free Copy Now
        </h3>
        <p>
          Enter your details below and I'll send you{" "}
          <strong>The ATM Decoder Protocol</strong> immediately.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4 mt-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 w-full text-white placeholder:text-gray-400 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight font-body"
            required
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 w-full text-white placeholder:text-gray-400 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight font-body"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="px-4 py-3 w-full text-white placeholder:text-gray-400 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight font-body"
            required
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            value={user.phone}
          />
          <CustomButton
            type="submit"
            ariaLabel="Send Me The Free Guide"
          >
            SEND ME THE FREE GUIDE
          </CustomButton>
        </form>

        <p className="text-sm italic mt-2 text-secondary">
          *No spam. No annoying emails. Just the guide you requested.*
        </p>
      </section>
    );
}