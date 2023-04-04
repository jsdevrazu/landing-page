import React from 'react'
import Header from '../Header'
import Hero from '../Hero'

const Home = () => {
    return (
        <section id='Home'>
            <Header />
            <div className="flex justify-center items-center min-h-screen">
                <Hero />
            </div>
        </section>
    )
}

export default Home