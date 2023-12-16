import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import { createClient } from '@supabase/supabase-js';
import MyTable from '../components/MyTable'
import { findAnswerCards } from '../utils/supabase-client';


export const revalidate = 0

const cardTableColumns = [
  {
      title: 'Answers',
      key: 'answers',
  },
  {
    title: 'Question',
    key: 'question',
},

  ]

const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async function About() {
    const answers = await findAnswerCards()
  return ( 
    <div>
    <Navbar />
    <PageTitle title="Answer Sheet" />
    <PageContent content="Content" >
      </PageContent>
      <MyTable columns = {cardTableColumns} records={answers}/>
  </div>
  )}
