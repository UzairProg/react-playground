import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'

function App() {

  const [userImages, setUserImages] = useState([]);
  const [index, setIndex] = useState(1);

  async function getUserData() {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserImages(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getUserData()
  }, [index])

  let printUserData = <h1 className="text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h1>

    if (userImages.length > 0) {
    printUserData = userImages.map(function (elem, idx) {

      return <div key={idx}>
        <Card img={elem.download_url} author={elem.author} />
      </div>
    })
  }

  return (
    <div className='bg-black flex flex-col items-center justify-start text-white p-8 gap-10 min-h-screen'>
      <h1 className='font-bold uppercase text-2xl'>image gallery</h1>
      <div className=" text-white flex gap-8 flex-wrap justify-center h-[82%] mt-auto">
        {printUserData} 
      </div>
    <div className='flex gap-8 items-center'>
      <button className='bg-amber-300 px-4 py-2 rounded-[6px] text-black font-semibold active:scale-97'
      style={{opacity:index==1 ? 0.6 : 1}}
      onClick={()=>{
        if(index>1){
          setUserImages([])
          setIndex(index-1)
        }
      }}
      >Prev</button>
      <h4>Page {index}</h4>
      <button className='bg-amber-300 px-4 py-2 rounded-[6px] text-black font-semibold active:scale-97'
      onClick={() => {
        setUserImages([])
        setIndex(index+1)
      }}
      >Next</button>
    </div>
    </div>
   
  )
}

export default App
