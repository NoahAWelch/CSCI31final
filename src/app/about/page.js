import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import CardForm from '../components/CardForm'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default function About() {

  const{ data: geography, error } = supabase.from('geography').select()

  return ( 
    <div>
    <Navbar />
    <PageTitle title="Geography" />
    <PageContent content="Content" >
    {geography && geography.map((geographies, idx) => (
          <Card key={idx} title={geographies.title} subtitle={geographies.subtitle} description={geographies.description} img={geographies.img}/> 
        ))} 
      </PageContent>
      <CardForm />
  </div>
  )
}

