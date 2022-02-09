import Head from 'next/head'

import styles from '../styles/Home.module.css'

import styled from "styled-components"
import Body from '../components/body/Body'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import FeaturedSection from '../components/featuredSection/FeaturedSection'



export default function Home() {
  return (
	<>
		<Head>
			<title>My Portfolio CV</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>	
		<Header>						
		</Header>
		<Main>
			<Hero></Hero>
			<FeaturedSection></FeaturedSection>
		</Main>
		<Footer>
			Footer Section
		</Footer>
		
	</>
  )
}
