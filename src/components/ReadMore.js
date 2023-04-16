import React from 'react';

export default function ReadMore(props) {
    const { visiblity, setvisiblity,note } = props
    return (
        <div className={` ${visiblity ? 'block' : 'hidden'} fixed z-10 inset-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-gray-50 px-4 py-3 border-b">
                        <h2 className="text-lg font-medium text-gray-900" id="modal-title">{note.title}</h2>
                        <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-600" onClick={()=>{setvisiblity(false)}} >
                            <span className="sr-only">Close</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        <p className="text-gray-500 break-words">{note.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

