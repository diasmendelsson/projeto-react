import Link from "next/link"
import React from "react";

export default function Header() {
    return (
        <header className="flex items-center justify-between"> 
            <div>
                <img
    
                    src="assets/1.svg"
                width={80}/>
            </div>
            <nav>
                <ul className="flex">
                    <li className=" mx-10 hover:text-blue-600 hover:font-bold"><Link  href="#">Sobre</Link></li>
                    <li className=" mx-10 hover:text-blue-600 hover:font-bold"><Link  href="#">Projetos</Link></li>
                    <li className=" mx-10 hover:text-blue-600 hover:font-bold"><Link href="#">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}