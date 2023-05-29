import Link from "next/link";
import React from "react"

export default function Perfil() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-28 " >
            <div className="" >
                <img
                    className=""
                    src="coding.png"
                    width={100}
                    
                />
            </div>

            <div className="text-center">
            <h1 className="text-2xl text-blue-600 font-bold">Olá, sou</h1>
            <p className="text-xl font-bold">Mendelsson Dias</p>
            <p className="mt-8">Conhecimentos nas tecnologias:</p>    
            </div>

            <div>
                <ul className="flex justify-center items-center">
                    <li className="m-4">
                    <Link className="text-center" href="https://nextjs.org/" target="_blank">
                        <img
                        className="w-10 animate-bounce"
                        src="assets/next-js.svg"
                        alt="assets/logo next" />
                        
                    </Link>
                        
                    </li>
                    <li className="m-4">
                    <Link className="text-center" href="https://react.dev/" target="_blank">
                        <img
                        className="w-10 animate-bounce"
                        src="assets/react-2.svg"
                        alt="logo react" />
                        
                    </Link>
                    </li>
                    <li className="m-4">
                        <Link  className="text-center " href="https://tailwindcss.com/" target="_blank">
                        <img
                        className="w-10 animate-bounce"
                        src="assets/tailwind-css-2.svg"
                        alt="logo react" />
                        
                        </Link>
                    </li>
                    <li className="m-4">
                        <Link href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
                        <img
                        className="w-10 animate-bounce"
                        src="assets/html-1.svg"
                        alt="logo react" />
                        
                        </Link>
                    </li>
                    <li className="m-4">
                        <Link href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                        <img
                        className="w-10 animate-bounce"
                        src="assets/css-3.svg"
                        alt="logo react" />
                       
                        </Link>
                    
                    </li>
                    <li className="m-4">
                        <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
                        <img
                        className="w-10 animate-bounce"
                        src="assets/javascript-1.svg"
                        alt="logo react" />
                        
                        </Link>
                    </li>
                    
                   
                </ul>
            </div>

        </div>
    )
}