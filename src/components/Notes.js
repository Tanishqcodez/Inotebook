import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import ClipLoader from "react-spinners/ClipLoader";


export default function Notes() {
    let navigate = useNavigate();
    const context = useContext(NoteContext)
    const { notes, getNotes, editNote, spinner,textLoading } = context


    const [state, setState] = useState(false)


    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            navigate('/login')
        } else {
            getNotes()
        }
        // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({ id: "", etitle: "", edesc: "", etag: "" })

    const updateNote = (currentNote) => {
        setState(true)
        setNote({ id: currentNote._id, etitle: currentNote.title, edesc: currentNote.desc, etag: currentNote.tags })

    }


    const handleClick = (e) => {
        e.preventDefault()
        editNote(note.id, note.etitle, note.edesc, note.etag)
        setState(false)
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <>
            <AddNote />
            <div className={`flex justify-center my-3 ${textLoading.state ? 'visible': 'hidden'} `}>
                <h1 className='mx-3 text-2xl'>{textLoading.message}</h1>
                <ClipLoader color={textLoading.color} loading={true} />
            </div>
            <div className={state ? ' ' : 'hidden'}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 " id="edit-modal">
                    <div className="bg-white rounded-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3 shadow-lg">
                        <div className="p-4 border-b">
                            <h2 className="text-2xl font-bold">Edit Note</h2>
                            <button className="text-gray-500 hover:text-gray-600 absolute top-2 right-2" id="edit-modal-close">
                            </button>
                        </div>
                        <form className="p-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="etitle">Title</label>
                                <input className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="etitle" type="text" name='etitle' placeholder="Title" onChange={onChange} value={note.etitle} minLength={3} required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="etag">Tag</label>
                                <input className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="etag" type="text" name='etag' placeholder='Tags' onChange={onChange} value={note.etag} minLength={2} required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="edesc">Description</label>
                                <textarea className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-[280px]" id="edesc" type="text" name='edesc' placeholder='Description' onChange={onChange} value={note.edesc} minLength={5} required />
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2 disabled:opacity-80 disabled:cursor-not-allowed" type="button" onClick={handleClick} disabled={note.etitle.length < 3 || note.edesc.length < 5 || note.etag.length < 2} >Save</button>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md" type="button" id="edit-modal-cancel" onClick={() => { setState(false) }} >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <h1 className=" text-4xl font-medium title-font mb-4 text-gray-900 text-center"> Your Notes</h1>
            <h4 className=" text-xl font-medium title-font mb-4 text-gray-900 text-center">
                {spinner.loading ? <Loading /> : notes.length === 0 && 'No Notes to Display!'}
            </h4>
            <div className='grid grid-cols-1 gap-5 mb-10 sm:grid-cols-3'>

                {notes.map((notes) => {
                    return <NoteItem note={notes} updateNote={updateNote} key={notes._id} />
                })}
            </div>
        </>
    )
}
