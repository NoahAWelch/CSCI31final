import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import CardForm from '../components/CardForm'
import { createClient } from '@supabase/supabase-js';
import Card from '../components/Card'
import MyTable from '../components/MyTable'
import { findCards } from '../utils/supabase-client'

export const revalidate = 0

const cardTableColumns = [
  {
      title: 'Title',
      key: 'title',
  },
  {
      title: 'Subtitle',
      key: 'subtitle',
  },
  {
      title: 'Img',
      key: 'img',
  },
  {
      title: 'Description',
      key: 'description',
  },
  ]



const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

//export const revalidate = 0

export default async function About() {
const cards = await findCards()
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
      <MyTable columns = {cardTableColumns} records={cards}/>
  </div>
  )
}
