

import { createClient } from '@supabase/supabase-js';

export function getClient() {
    const supabase = createClient('https://nsahzrfqusigvxxhcksh.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase;
}

export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('cards').insert(card)
}

export async function insertMyCard(histories) {
  const supabase = getClient()
  const { error } = await supabase.from('history').insert(histories)
}

export async function insertMySciCard(sciences) {
  const supabase = getClient()
  const { error } = await supabase.from('science').insert(sciences)
}

export async function insertMyGeoCard(geogrophies) {
  const supabase = getClient()
  const { error } = await supabase.from('geography').insert(geogrophies)
}


export async function insertMyPopCard(popCultures) {
  const supabase = getClient()
  const { error } = await supabase.from('popCulture').insert(popCultures)
}


/*export async function outputCard(histories) {
  const supabase = getClient()
  const { error } = await supabase.from('history').insert(histories)
}*/
export const outputCard = (selectedAnswer) => {
  // Your logic to handle the selected answer
  console.log(`Selected Answer: ${selectedAnswer}`);
  return selectedAnswer; // You can customize this based on your logic
};

export async function findCards() {
  const supabase = getClient()
  const{ data: cards, error } = await supabase.from('cards').select()
  return cards
}

export async function findAnswerCards() {
  const supabase = getClient()
  const{ data: answersheet, error } = await supabase.from('answersheet').select()
  return answersheet
}

export async function findMyCards() {
  const supabase = getClient()
  const{ data: history, error } = await supabase.from('history').select()
  return history
}
export async function findMyNewCards() {
  const supabase = getClient()
  const{ data: historyanswersheet, error } = await supabase.from('historyanswersheet').select()
  return historyanswersheet
}

export async function findMyPopCards() {
  const supabase = getClient()
  const{ data: popCulture, error } = await supabase.from('popCulture').select()
  return popCulture
}

export async function findMyGeoCards() {
  const supabase = getClient()
  const{ data: geography, error } = await supabase.from('geography').select()
  return geography
}

export async function findMySciCards() {
  const supabase = getClient()
  const{ data: science, error } = await supabase.from('science').select()
  return science
}

