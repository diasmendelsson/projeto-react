import React from 'react'
import Link from 'next/link';
import Header from './components/Header.js'
import Perfil from './pages/index.js';

export default function Home() {
    return (
        <>
            <Header />
            <Perfil />
        </>
    )
}