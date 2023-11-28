import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/pageTitle' 
import PageContent from './components/pageContent' 
import Card from './components/Card'
import Footer from './components/Footer'
import { findCards } from './utils/supabase-client'
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Home() {

//const{ data: cards, error } = await supabase.from('cards').select()
const cards = await findCards()
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Home" /> 
      <PageContent content="Content"className="flex grow" >
        {cards && cards.map((card, idx) => (
          <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} img={card.img}/> 
        ))}
      
      </PageContent>
    </div>
  )
}
