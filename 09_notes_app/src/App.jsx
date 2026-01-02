import React from 'react'
import { useState } from 'react';

function App() {

  const [notesTitle, setNotesTitle] = useState('');
  const [notesDetails, setNotesDetails] = useState('');

  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) { 
    e.preventDefault();
    setNotesDetails('');
    setNotesTitle('');

    if (notesTitle === '' || notesDetails === '') {
      alert('Please fill in both fields');
      return;
    }
  


    const newTask = { title: notesTitle, details: notesDetails };
    let copyTasks = [...tasks]; 
    /* makes an acutal copy of tasks array.. 
    why not copyTasks = tasks ? Because that would just create a reference to the same array in memory 
    if we change copyTasks, tasks would also change
    */ 
    copyTasks.push(newTask);
    setTasks(copyTasks);
  }

  function handleTitleChange(e) {
    setNotesTitle(e.target.value);
  }
  
  function handleDetailsChange(e) {
    setNotesDetails(e.target.value);
  }

    function deleteNote(idx) {
    let copyTasks = [...tasks];
    copyTasks.splice(idx, 1); // splice removes 1 element at index idx
    setTasks(copyTasks); // as we delete a note, we update the tasks state.. and automatically the UI re-renders
  }

  return (
    <div className='bg-black text-white min-h-lvh lg:flex p-8 gap-10 pt-15 '>
      <div className='lg:w-1/2 font-medium'>
      
      <form className='flex flex-col gap-4 lg:px-10 '
      onSubmit={handleSubmit}
      >
        <h1 className='text-4xl font-semibold mb-2'>Add Notes</h1>
        <input type="text" value={notesTitle} placeholder='Notes Title' className='border-2 py-2 px-4 rounded outline-none '
        onChange={handleTitleChange}
        />
        <textarea placeholder='Notes Details' value={notesDetails} className='outline-none border-2 py-2 px-4 rounded h-24'
        onChange={handleDetailsChange}
        >
        
        </textarea>
        <button className='bg-white text-black rounded py-2 px-4 active:bg-gray-200 active:scale-99 ' type='submit'>
          Add Note
        </button>
      </form>
      </div>
      <div className='flex flex-col mt-8 gap-6 lg:pl-8 lg:mt-0 lg:border-l-2 items-start justify-start lg:w-1/2'>
        <h1 className='text-4xl font-semibold'>Recent Notes</h1>
        <div className='flex gap-8 flex-wrap overflow-hidden justify-evenly lg:justify-start'>
          {
          tasks.map((task, idx) => (
            <div key={idx} className="h-52 w-40 px-4 pb-4 flex flex-col justify-between rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h2 className='text-black font-bold text-lg pt-9 overflow-hidden text-ellipsis line-clamp-2'>{task.title}</h2>
                <p className='text-gray-900 pt-2 overflow-hidden text-ellipsis line-clamp-2'>{task.details}</p>
              </div>
              <button className='bg-red-600 active:scale-99 active:bg-red-700 w-full rounded '
              onClick={() => {
                deleteNote(idx);
              }}
              >Delete</button>
            </div>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default App
