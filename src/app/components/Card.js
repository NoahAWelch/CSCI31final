export default function Card({title, subtitle, description, img = 'https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'}) {
   return  <div class="p-3 bg-gray-100 shadow-lg text-gray-900 border border-red-300 rounded-lg hover:scale-110 hover:bg-blue-400 bg-gradient-to-r from-blue-300 to-blue-400' grow">
    <h1 class="animate-bounce py-2">{title}</h1>
    <img src={img}/>
    
    <h2 class="py-1">{subtitle}</h2>
    <p>{description}</p>
    </div>
}