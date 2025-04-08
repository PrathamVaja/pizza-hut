import React from 'react'
import Header from '../Components/Header'
import Cooks from '../Components/Cooks'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import ExpHero from '../Components/ExploreComponents/ExpHero'
import ItemCard from '../Components/OrederNowComponents/ItemCard'

const OrderNow = () => {
    return (
        <>
            <div>
                <Header />

                <ItemCard/>

               
              
                <Footer />
            </div>

        </>
    )
}

export default OrderNow