import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle';
import PageContent from './components/PageContent'; 

export default function Home() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Home" /> 
      <PageContent content="Content" /> 
    </div>
  )
}
