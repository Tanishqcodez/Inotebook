import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function NoteItem(props) {
    const { note } = props
    const context = useContext(NoteContext)
    const { setshowAlert } = context
    return (
        <>
            {/* make the func that launches a modal when clicked on read more */}
            <span className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{note.title ? note.title.slice(0, 45) : ""}</div>
                    <p className="text-gray-700 text-base">
                        {note.desc ? note.desc.slice(0, 100) + "..." : ""}
                    </p>
                    <span className="text-gray-900 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {note.tags.map((tags) => {
                        return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tags}># {tags}</span>
                    })}
                    <div>
                        <span onClick={()=>{
                            setshowAlert(true)

                        }}>
                            <i className="fa-solid fa-trash mr-5 mt-2" ></i>
                        </span>
                        <span onClick={()=>{
                            setshowAlert(true)
                        }}>
                            <i className="fa-solid fa-edit"></i>
                        </span>
                    </div>
                </div>

            </span>


        </>
    )
}
