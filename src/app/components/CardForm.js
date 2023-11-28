import Button from "./Button"
import Field from "./Field"
import Label from "./Label"
import Input from "./Input"
import { insertCard } from "./utils/supabase-client"
import { redirect } from 'next/navigation'
async function createCard(formData) {
    'use server'
   // console.log('test')
    const title = formData.get('title')
    const subtitle = formData.get('subtitle')
    const img = formData.get('img')
    const description = formData.get('description')
    insertCard(title, subtitle, img, description)
    redirect('/')
    // get each field out of formData 
    // call supabase-client insertCard
  }
  
  export default function CardForm() {
    return ( <form action={createCard} className="p-3 bg-blue-400 m-2 rounded-lg">
        <Field>
            <Label label="title"/>
            <Input id="title" name="title" />
        </Field>
        <Field>
            <Label label="subtitle"/>
            <Input id="subtitle" name="subtitle" />
        </Field>
        <Field>
            <Label label="img"/>
            <Input id="img" name="img" />
        </Field>
        <Field>
            <Label label="description"/>
            <Input id="description" name="description" />
        </Field>
        <div className="mt-2 flex justify-end">
        <Button type ="submit">Add Card</Button>
        </div>
        </form>
      )
  }
