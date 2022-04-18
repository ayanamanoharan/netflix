import React from 'react'
import Navabar from './Navabar'
import Banner from "./Banner"
import List from './List'

function Home() {
    return (
        <div className='home'>
            <Navabar />
            <Banner />
            <List />
        </div>
    )
}

export default Home