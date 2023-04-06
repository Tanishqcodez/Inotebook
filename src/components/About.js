import React from 'react'

export default function About() {


  return (
    <div className='mt-5'>
      <div>
        <h1 className='text-center text-4xl'>About Us</h1>
        <p className='text-center text-xl text-gray-600 mx-24 '>
          Inotebook - Your Notebook on The Cloud, Safe and Secured is an app created by Tanishq. Inotebook allows you to create, delete and update your Notes which are stored on a cloud database. You can acess your notes from any device from anywhere in the world!
        </p>
      </div>
      <div className='mt-10 leading-4 mx-[35vw]'>
        <h1 className='text-center text-4xl'>Data and Privacy</h1>
        <ul className=''>
          <li className='font-bold text-xl list-disc '>Data</li>
          <p className='my-2'>
            Your notes on Inotebook are safe and secured! No one can see/edit/change your notes
          </p>
          <li className='font-bold text-xl list-disc'>Privacy</li>
          <p className='my-2'>
            You are safe and secured on Inotebook.
          </p>
        </ul>
      </div>
    </div>
  )
}