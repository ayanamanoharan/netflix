import React from 'react'
import Navabar from './Navabar'
import Banner from "./Banner"
import List from './List'
import "./home.css"

import { actionUrl, comedyUrl, horrorUrl, thrillerUrl } from "../constants/constant"

function Home() {
    return (
        <div className='home'>
            <Navabar />
            <Banner />
            <List url={actionUrl} title="Netflix Originals" />
            <List url={actionUrl} title="Action" smallCard />
            <List url={thrillerUrl} title="Thriller" />
            <List url={comedyUrl} title="Comedy" smallCard />
            <List url={horrorUrl} title="Horror" smallCard />
        </div>
    )
}

export default Home