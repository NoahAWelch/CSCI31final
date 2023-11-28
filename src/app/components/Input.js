
export default function Input({type = 'text', placeholder = 'enter text here...', name, id}) {
return <input className="p-2 rounded-lg shadow-lg" type ={type} name={name} id={id} placeholder={placeholder}/>
  
}