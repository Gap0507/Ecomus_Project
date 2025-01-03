import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero/HeroSection'
import ShopCategories from '../../components/categories/ShopCategories'
import BestSeller from '../../components/BestSeller/BestSeller'
import ShopLook from '../../components/ShopLook/ShopLook'
import Feedback from '../../components/Feedback/Feedback'
import ShopGram from '../../components/ShopGram/ShopGram'
import Footer from '../../components/Footer/Footer'
import RefreshPopup from '../../components/Popups/RefreshPopup'

const HomeScreen = () => {
  return (
    <>
        <HeroSection />
        <ShopCategories />
        <BestSeller />
        <ShopLook />
        <Feedback />
        <ShopGram />
        <RefreshPopup />
    </>
  )
}

export default HomeScreen