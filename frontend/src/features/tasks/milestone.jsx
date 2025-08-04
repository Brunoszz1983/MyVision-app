import { useState, useEffect } from 'react'

const Milestone = () => {

    return (
        <div className="w-full">
            <div className="w-full  border rounded-md border-[#d6d6d6] p-4">
                <div className="w-full flex">
                    <div className="w-5/10"><h2>90 Days</h2></div>
                    <div className="w-5/10 text-right pt-1"><p>4 tasks</p></div>
                </div>
                <div className="w-5/10 flex border rounded-md border-[#d6d6d6] p-4">
                    <div className="w-full flex">
                        <div className="w-5/10"><h3>Task Name</h3></div>
                        <div className="w-5/10 text-right"><button>bussines</button></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
    }

export default Milestone