import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import Footer from '../components/Footer'

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default function products() {

  const{ data: pop_culture, error } = supabase.from('pop_culture').select()

  return ( 
    <div>
    <Navbar />
    <PageTitle title="Pop Culture" />
    <PageContent content="Content" >
    {pop_culture && pop_culture.map((pop_cultures, idx) => (
          <Card key={idx} title={pop_cultures.title} subtitle={pop_cultures.subtitle} description={pop_cultures.description} img={pop_cultures.img}/> 
        ))} 
        </PageContent>
  </div>
  )
}
