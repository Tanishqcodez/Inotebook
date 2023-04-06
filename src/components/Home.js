import React from 'react'
import Notes from './Notes'


export default function Home() {

  return (
    <div>
      <div className='mt-5'>
        <h1 className='text-center text-4xl'>Inotebook</h1>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Add a Note</h1>
              {/* add the functionality to check if 0 notesx are there then text will be displayed something else */}
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Start by adding a Note in your Inotebook!</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                    <input type="text" id="name" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="tags" className="leading-7 text-sm text-gray-600">Tags</label>
                    <input type="email" id="email" name="tags" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Description</label>
                    <textarea id="message" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"  ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Create Note</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Notes />
    </div>
  )
}
