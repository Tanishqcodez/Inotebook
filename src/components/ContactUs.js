import React,{useState, useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function ContactUs() {
  const context = useContext(NoteContext)
  const { setAlertMessage, setshowAlert } = context

  const [data, setData] = useState({
    name: '',
    email: '',
    desc: ''
  })
  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
}
  const handleClick = async(e) => {
    e.preventDefault()
    const response = await fetch("https://inotebook-80ri.onrender.com/sumbitform", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({name: data.name, email: data.email, desc: data.desc})
  })
  const json = await response.json()
  console.log(json)
  if (json.success === true) {
    setshowAlert(true)
    setAlertMessage({
      message: 'From Submitted Successfully!!',
      color: false
    })
  }else{
    setshowAlert(true)
    setAlertMessage({
      message: 'Please enter valid email',
      color: true
    })
  }
}
  return (
    <div>
      <h1 className='text-center text-4xl'>Contact us</h1>
      <h4 className='text-center text-xl'>Feel free to contact us!</h4>
      <div>
      <div className="max-w-md mx-auto">
  <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" name='name' onChange={onChange} required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" name='email' onChange={onChange} required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
        Message
      </label>
      <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" rows="5" placeholder="Enter your message" name='desc' onChange={onChange} required></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-400 disabled:cursor-not-allowed" type="submit" onClick={handleClick} disabled={data.name.length<3 || data.desc.length<5}>
        Send
      </button>
    </div>
  </form>
</div>

      </div>
    </div>
  )
}
