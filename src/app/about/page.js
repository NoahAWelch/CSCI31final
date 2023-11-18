import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'

export default function About() {
  return ( 
    <div>
    <Navbar />
    <PageTitle title="Geography" />
    <PageContent content="Content" />
  </div>
  )
}
