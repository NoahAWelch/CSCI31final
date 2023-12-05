import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import Footer from '../components/Footer'
import HistoryCard from '../components/HistoryCard'
import { findMyCards } from '../utils/supabase-client'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Services() {
  const history = await findMyCards()
  
    return ( 
      <div>
         <Navbar />
         <PageTitle title="Services" /> 
      <PageContent content="Content" className="flex  basis-1/3" >
      {history&& history.map((historyAnswers, idx) => (
  <HistoryCard key={idx} Question={historyAnswers.Question} Answer1={historyAnswers.Answer1} Answer2={historyAnswers.Answer2}
  Answer3={historyAnswers.Answer3} Answer4={historyAnswers.Answer4} />     
))}   

          </PageContent>
    </div>
    )
  }
