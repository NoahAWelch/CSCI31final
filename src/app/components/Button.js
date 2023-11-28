
export default function Button({ children, onClick, type = 'button'}) {
    return <button className="px-4 py-4 bg-blue-600 m-2 rounded-full shadow-md transition-all hover:bg-blue-200 active:bg-blue-600" type={type} onClick={onClick}> {children}</button>
  
}