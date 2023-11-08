import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/pageTitle' 
import PageContent from './components/pageContent' 
import Card from './components/Card'

export default function Home() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Home" /> 
      <PageContent content="Content"className="flex grow" >
      <Card title="title1" subtitle="subtitle1" img="https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" description="description1"/> 
      <Card title="title2" subtitle="subtitle2" img="https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" description="description2"/> 
      <Card title="title3" subtitle="subtitle3" img="https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" description="description3"/> 
      </PageContent>
    </div>
  )
}