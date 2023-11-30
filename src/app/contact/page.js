import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import Footer from '../components/Footer'
import Card from '../components/Card'

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default function contact() {

  const{ data: science, error } = supabase.from('science').select()

  return ( 
    <div>
    <Navbar />
    <PageTitle title="Science" />
    <PageContent content="Content" >
    {science && science.map((sciences, idx) => (
          <Card key={idx} title={sciences.title} subtitle={sciences.subtitle} description={sciences.description} img={sciences.img}/> 
        ))} 
      </PageContent>
  </div>
  )
}
