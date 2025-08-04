import { useState, useEffect } from 'react'
import Milestone from './milestone'

const SmartTasks = () => {

    return (
        <>
        <div className="w-full flex">
            <div className="w-3/10">
                <h1>SMART Tasks</h1>
            </div>
            <div className="w-7/10 text-right">
                <button>Create New Task +</button>
            </div>
        </div>
        <div className="w-full flex">
            <Milestone />
        </div>
        </>
    )
    }

export default SmartTasks