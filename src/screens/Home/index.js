import React from 'react'
import About from './About'
import Banner from './Banner'
import FinishProject from './FinishProject'
import LogoCarausel from './LogoCarousel'
import Map from './Map'
import Services from './Services'

function MainPage() {
    return (
        <>
            <Banner />
            <LogoCarausel />
            <About />
            <Services />
            <FinishProject />
            <Map />
        </>
    )
}

export default MainPage