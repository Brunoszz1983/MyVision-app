import { useState, useEffect } from 'react'

const VisionEditor = ({vision, updateVision, setUpdateVision, handleUpdate}) => {
    const [edit , setEdit] = useState(false)
   
    const handleUpdateVision = (event) =>{
        setUpdateVision(event.target.value)
    }

    const startEdit = (event) => {
        event.preventDefault()
        setEdit(true)
    }
    const stopEdit = (event) => {
        event.preventDefault()
        setEdit(false)
    }
    return (
        <div className="w-full">
            
            <p>{vision.content}</p>
            <form onSubmit={handleUpdate}>
            {edit === true ? (<><input className="border" value={updateVision || ""} onChange={handleUpdateVision} ></input> <button type="submit">Update</button> <button onClick={stopEdit}>X</button></>) : (<><button onClick={startEdit}>Edit</button></>)}
            
            </form>
        </div>
    )
}

export default VisionEditor