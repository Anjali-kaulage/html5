 import React, { useRef, useState } from 'react'
 
 import todo_icon from '../assets/todo_icon.png'
 import image from '../assets/image.png'
 import image_copy from '../assets/image_copy.png'

 





 

 
 const Todo = () => {

const[todoList,setTodoList]=useState([]);

  const intputRef = useRef();
  const add = () =>{
    const inputText=intputRef.current.value.trim();
    if(inputText=== ""){
      return null;
      
    }


   const newTodo={
    id: Date.now(),
    text: inputText,
    isComplete:false,
   }
   setTodoList((prev)=> [...prev,newTodo]);
   intputRef.current.value="";

  }
   return (
     <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-7/12 rounded-xl '>

        {/* title */}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />

            <h1 className='text-3xl font-semibold'>TO-DO List</h1>

        </div>

        {/* input box */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={intputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' type="text" placeholder='Add your task' />
            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>
{/* todo list */}
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={image} alt=""  className='w-7'/>
        <p className='tex-slate-700 ml-4 text-[17px]'>Learn coding</p>
      </div>
      <img src={image_copy} alt="" className='w-7'/>
     
    </div>
    {/* todo list */}  

    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={image} alt=""  className='w-7'/>
        <p className='tex-slate-700 ml-4 text-[17px]'>Learn React</p>
      </div>
      <img src={image_copy} alt="" className='w-7'/>
      <div>
        {todoList.map((item,index)=>{
          return <todoitems key={index} text={item.text}/>
        })}
      </div>
  

      
     
    </div>
    

   
  </div>
   )
 }
 
 export default Todo