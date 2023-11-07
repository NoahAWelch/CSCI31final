import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/pageTitle'
import PageContent from './components/pageContent'

export default function Home() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Home" /> 
      <PageContent content="Content" /> 
    </div>
  )
}
