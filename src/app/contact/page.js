import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import Footer from '../components/Footer'
import ScienceCard from '../components/ScienceCard'
import { findMySciCards } from '../utils/supabase-client'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function contact() {
  const science = await findMySciCards()
  

  return ( 
    <div>
    <Navbar />
    <PageTitle title="Science" />
    <PageContent content="Content" >
    {science && science.map((sciences, idx) => (
          <ScienceCard key={idx} Question={sciences.Question} Answer1={sciences.Answer1} Answer2={sciences.Answer2} Answer3={sciences.Answer3} Answer4={sciences.Answer4}/> 
        ))} 
      </PageContent>
  </div>
  )
}
