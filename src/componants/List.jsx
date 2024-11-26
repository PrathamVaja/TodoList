
import { useState } from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const List = () => {
    const [text , setText] = useState('');
    const [task,setTask] = useState([]);
    const [datetime ,setDatetime] = useState('')
   
    

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        if (!text) return;
        if(task.includes(text)) {
            setText('');
            return;

        };

        setTask((prevTask) =>  [...prevTask,text] )
        setText('');
           
       
    }
    
    const mytime = ()=>{
        const now = new Date();
        const date = now.toLocaleDateString();
    
        const time = now.toLocaleTimeString()

        setDatetime(`${date} - ${time}`)
  
    }

    setInterval(() => {
        mytime();
        
    }, 1000);
    
    
// for delete task
    const handleDelete = (value) => {


       const updatedTask = ()=> task.filter((task)=> task!== value )
        
        setTask(updatedTask);
    }

    

  return (
    <div className='bg-pink-500 h-screen w-full  justify-center '>
        <header className='font-bold text-4xl flex justify-center pt-44 text-white'>
            <h1>To-Do List</h1>
        </header>

        <section className='flex justify-center text-white text-2xl'>
                <h2>{datetime}</h2>
        </section>

      <div className='flex justify-center pt-5' >
          <form onSubmit={handleFormSubmit}>
            <input className='p-3 border outline-none rounded-l-2xl w-80 autofill: ' type="text" placeholder='Enter To-Do' value={text} onChange={(e) => setText(e.target.value)} />
           <button  type='submit' className='bg-lime-500  border rounded-r-2xl p-3 hover:bg-yellow-400 font-serif font-bold'>Add To-Do</button>
          </form>
        </div>

        <section>
           <ul className='flex  flex-col  mt-4 '>
           {
                task.map((task,index)=>{

                    return <div key={index} className='list sm:mx-20  md:mx-48 lg:mx-72 '>
                        <li className='font-bold px-5 border-2 rounded  m-1 shadow-black shadow-2xl p-2 bg-white font-serif flex justify-between items-center  ' >{task}
                    
                    <div className='flex  mx-5'>
                    <IoMdCheckmarkCircle  className='mr-2 size-6 text-green-600 '  />
                    <MdDeleteForever onClick={ () => handleDelete(task)} className='size-6 text-red-600'/>
                    </div>
                    </li>
                    </div>
                })
            }
           </ul>
        </section>

            <section className='flex  justify-center mt-4'>
            <button onClick={()=> setTask([])} className='shadow-2xl shadow-black w-20 bg-green-500 font-bold  p-2 rounded '>Clear</button>
    
            </section>   
    </div>
  )
}

export default List
