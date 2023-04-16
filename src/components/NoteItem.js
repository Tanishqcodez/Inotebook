import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import ReadMore from './ReadMore'

export default function NoteItem(props) {
    const { note, updateNote } = props
    const context = useContext(NoteContext)
    const { deleteNote } = context

    let raw = note.tags
    let ftag = raw.split(',')
    const [visiblity, setvisiblity] = useState(false)
    return (
        <>
            {/* make the func that launches a modal when clicked on read more */}
            <ReadMore note={note} visiblity={visiblity} setvisiblity={setvisiblity}/>
            <span className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">{note.title ? note.title.slice(0, 45) : ""}</div>
                    <p className="text-gray-700 text-base">
                        {note.desc.length < 100 ? note.desc : note.desc.slice(0, 35) + "..."}
                    </p>
                    {note.desc.length < 100 ? '' : <span className="text-gray-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" onClick={()=>{setvisiblity(true)}}>Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </span>}
                </div>
                <div className="px-6 pt-4 pb-2">
                    {ftag.map((tags) => {
                        return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tags + note._id}># {tags}</span>
                    })}
                    <div>
                        <span onClick={() => {
                            deleteNote(note._id)
                        }}>
                            <i className="fa-solid fa-trash mr-5 mt-2" ></i>
                        </span>
                        <span onClick={() => { updateNote(note) }}>
                            <i className="fa-solid fa-edit"></i>
                        </span>
                    </div>
                </div>

            </span>


        </>
    )
}
