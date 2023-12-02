"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const sumbitHandler =(e)=>{
     e.preventDefault()
    setMainTask([...mainTask, { title,desc}])
        settitle("")
        setdesc("")
  }
  //

  const deleteHandler = (i)=>{

      let copytask = [...mainTask]
      copytask.splice(i,1);
      setMainTask(copytask);
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0){
   renderTask = mainTask.map((t,i)=> {
    return(
    <li key={i} className='flex items-center justify-between mb-5'>
      <div className='flex items-center justify-between w-2/3 '> 
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button onClick={()=>
       {
        deleteHandler(i);
      }}
      className='bg-red-600 text-white px-4 py-2 text-bold text-xl rounded'>Delete</button>
    </li> 
    )
  })
}

  return (
    <>
      <h1 className='bg-black text-white p-5 
      text-bold text-3xl text-center'>My Todo List</h1>

      <form onSubmit={sumbitHandler} className='text-center '>

        <input type='text' 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
        placeholder='Enter Task Here'
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />

        <input type='text' 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
        placeholder='Enter Description Here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        />

        <button className='bg-black text-white text-2xl 
        text-bold px-4 py-2 rounded'>Add Task</button>

      </form>

       <hr/>
       <div className='bg-slate-200 p-8 text-center  m-8 '>
            <ul>
             {renderTask}
            </ul>
       </div>
    </>
  )
}

export default page
