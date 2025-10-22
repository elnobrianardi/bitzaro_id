import CryptoRow from '@/components/CryptoRow'
import CryptoTable from '@/components/CryptoTable'
import GuideCard from '@/components/GuideCard'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Platform from '@/components/Platform'
import Start from '@/components/Start'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero/>
      <CryptoRow/>
      <CryptoTable/>
      <GuideCard/>
      <Journey/>
      <Platform/>
      <Start/>
    </main>
  )
}

export default Home