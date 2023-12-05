import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import Footer from '../components/Footer'
import PopCultureCard from '../components/PopCultureCard'
import { findMyPopCards } from '../utils/supabase-client'
import { createClient } from '@supabase/supabase-js';


const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Products() {
  const popCulture = await findMyPopCards()
  

  return ( 
    <div>
    <Navbar />
    <PageTitle title="Pop Culture" />
    <PageContent content="Content" className="flex  basis-1/3">
    {popCulture&& popCulture.map((popCultures, idx) => (
          <PopCultureCard key={idx} Questions={popCultures.Questions} Answer1={popCultures.Answer1} 
          Answer2={popCultures.Answer2} Answer3={popCultures.Answer3} Answer4={popCultures.Answer4}/> 
        ))} 
        </PageContent>
  </div>
  )
}
