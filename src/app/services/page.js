import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import Footer from '../components/Footer'
import Card from '../components/Card'

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default function services() {

  const{ data: history, error } = supabase.from('history').select()


  return ( 
    <div>
    <Navbar />
    <PageTitle title="History" />
    <PageContent content="Content" >
    {history && history.map((histories, idx) => (
          <Card key={idx} title={histories.title} subtitle={histories.subtitle} description={histories.description} img={histories.img}/> 
        ))}
        </PageContent>
  </div>
  )
}
