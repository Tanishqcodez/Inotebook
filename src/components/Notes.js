import React, {useContext}  from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

export default function Notes() {
    const context = useContext(NoteContext)
    const {notes} = context
    
    
    return (
        <>
        <AddNote/>
            <h1 className=" text-4xl font-medium title-font mb-4 text-gray-900 text-center"> Your Notes</h1>
            <div className='grid grid-cols-3 gap-5 mb-10'>
                {notes.map((notes) => {
                    return <NoteItem note={notes} key={notes._id}/>
                })}
            </div>
        </>
    )
}
