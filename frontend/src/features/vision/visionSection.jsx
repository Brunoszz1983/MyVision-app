import { useState, useEffect } from 'react'
import visionsService from '../../services/visions'
import usersService from '../../services/users'
import Vision from './vision'
import VisionEditor from './visionEditor'

const VisionSection = () => {
    const [user, setUser] = useState([])
    const [vision, setVision] = useState([])

    useEffect(() => {
        usersService
            .getUserById(1)
            .then(data => {
                setUser(data)
            })
        },[])

    

    useEffect(() => {
        if (user && user.id && user.hasVision == true) {
        visionsService
            .getVisionById(user.id)
            .then(data => {
                setVision(data)
            })
    }},[user])
     
    console.log(user.id , user.hasVision)
    console.log(vision.content)

    return (
        <div className="w-3/5">
            <h1>MY VISION</h1>
            {user.hasVision == true ? <Vision vision={vision}/> : <VisionEditor />}
        </div>
    )
}

export default VisionSection