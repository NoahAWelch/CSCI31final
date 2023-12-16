import Button from "./Button"
import Button from "./Button"
import { insertMyCard} from "../utils/supabase-client"
import { redirect } from "next/navigation"
import Input from "./Input"
import Label from "./Label"
import Field from "./Field"
import ButtonInputs from "./ButtonInputs"
async function createCard(formData) {
    'use server'
    const Answer3 = formData.get('Answer3')
    if (formData === Answer3){
    const Answer3 = formData.get('Answer3')
    insertMyGeoCard({Answer3})
}else{
    const Answer3 = "wrong"
    insertMyGeoCard({Answer3})
}
    redirect('/about')
  }

export default function HistoryCard({Question, Answer1, Answer2, Answer3, Answer4}) {


   return <div className="flex p-1 flex-col justify-evenly grow p-3 transition-all bg-gray-100 shadow-lg text-gray-900 border border-red-300 rounded-lg hover:scale-110 hover:bg-blue-400 bg-gradient-to-r from-blue-300 to-blue-400'">
      <h1 className=" py-2">{Question}</h1>
      <form action={createCard}>
      <Field>
        <Button type="submit">{Answer1}
        </Button>
        <ButtonInputs id={Answer1} name="Wrong" />
      </Field>
      <Field>
        <Button type="submit">
          {Answer2}
        </Button>
        <ButtonInputs id="Wrong" name="Wrong" />
      </Field>
      <Field>
        <Button type="submit">
          {Answer3}
        </Button>
        <ButtonInputs id={Answer3} name={Answer3} />
      </Field>
      <Field>
        <Button type="submit">
          {Answer4}
        </Button>
        <ButtonInputs id="Wrong" name="Wrong" />
      </Field>
      </form>
    </div>
}
 

 
