import React from 'react'
import {Hero , ArtExemple , Artist , CategorieArt , FAQ , NewLetter } from '../Components/HomePage/'

const HomePage = () => {
  return (
    <main className='homePage'>

        <Hero/>
        <ArtExemple/>
        <CategorieArt/>
        <Artist/>
        <NewLetter/>
        <FAQ/>

        
    </main>
  )
}

export default HomePage