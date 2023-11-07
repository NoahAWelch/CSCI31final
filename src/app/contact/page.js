import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'

export default function contact() {
  return ( 
    <div>
    <Navbar />
    <PageTitle title="Contact" />
    <PageContent content="content" />
  </div>
  )
}
