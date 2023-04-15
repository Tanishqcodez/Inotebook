import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Loading from './Loading'

const AddNote = () => {
    const context = useContext(NoteContext)
    const { addNote, spinner } = context
    const [note, setNote] = useState({
        title: "",
        desc: "",
        tag: ""
    })


    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.desc, note.tag)
        setNote({id: "", title: "", desc: "", tag: ""})
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
        <div className='mt-5'>
            <h1 className='text-center text-4xl'>Inotebook</h1>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Add a Note</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Start by adding a Note in your Inotebook!</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                                    <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} minLength={5} required value={note.title}  />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="tag" className="leading-7 text-sm text-gray-600">Tags [ use comma for multiple tags ]</label>
                                    <input type="text" id="tag" name="tag" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} minLength={5} required value={note.tag}  />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Description</label>
                                    <textarea id="desc" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={onChange} minLength={5} required  value={note.desc} ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg disabled:opacity-75 disabled:cursor-not-allowed" onClick={handleClick}  disabled={note.title.length<3 ||note.desc.length<5 || note.tag.length<2 } >{spinner.loading? <Loading/>: 'Add Note' }</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        </div>
    )
}

export default AddNote