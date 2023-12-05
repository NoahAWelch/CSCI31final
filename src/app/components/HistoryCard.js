import Button from "./Button"
import { insertMyCard} from "../utils/supabase-client"
//import { redirect } from "next/navigation"
import Input from "./Input"
import Label from "./Label"
async function createCard(formData) {
    'use server'
    const Answer1 = formData.get('Answer1')
    insertMyCard({Answer1})
   // redirect('/services')
  }

export default function HistoryCard({Question, Answer1, Answer2, Answer3, Answer4}) {


    return  <div className="flex p-1 flex-col p-3 transition-all bg-gray-100 shadow-lg text-gray-900 border border-red-300 rounded-lg hover:scale-110 hover:bg-blue-400 bg-gradient-to-r from-blue-300 to-blue-400' grow">
                <h1 className=" py-2">{Question}</h1>
                   
                   <form action={createCard}>
                   <Label label={Answer1}/>
                   <Label label={Answer2}/>
                   <Label label={Answer3}/>
                   <Label label={Answer4}/>
                    <Input id="Answer1" name="Answer1" /> 
                    <div className="mt-4 flex justify-end">
                <Button type="submit">Find the Answer</Button>
            </div>
                    </form>    
            </div>
 }
 
 

 