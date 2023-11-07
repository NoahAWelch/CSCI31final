import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'

export default function services() {
  return ( 
    <div>
    <Navbar />
    <PageTitle title="Services" />
    <PageContent content="Content" />
  </div>
  )
}
