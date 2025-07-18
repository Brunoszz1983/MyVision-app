import { useState, useEffect } from 'react'
import visionsService from '../../services/visions'
import usersService from '../../services/users'
import VisionNew from './visionNew'
import VisionEditor from './visionEditor'
import { useUser } from '../../context/userContext'

const VisionSection = () => {
    const { user , setUser} = useUser()
    const [vision, setVision] = useState([])
    const [newVision, setNewVision] = useState([])
    const [updateVision, setUpdateVision] = useState()

    useEffect(() => {
        if (user && user.id && user.hasVision == true) {
        visionsService
            .getVisionById(user.id)
            .then(data => {
                setVision(data)
            })
    }},[user])

    const handleUpdate = (event) => {
        event.preventDefault()

        visionsService
        .update(user.id, {content: updateVision})
        .then (rtnUpdVision => {
            setUpdateVision([...vision,rtnUpdVision])
        })
    }

    const handleNew = (event) => {
        console.log('handleNewVisionSection')
        event.preventDefault()

        const visionObject = {
            id: `v${user.id}`,
            userId: user.id,
            content: newVision
        }
        visionsService
        .create(visionObject)
        .then (returnedVision => {
            setVision([...vision,returnedVision])
        })

        usersService
        .update(user.id, {hasVision: true})
        .then (returnedVisionState => {
            setUser({...user,...returnedVisionState})
        })
        
        
    }
     
    //console.log(user.id , user.hasVision)
    //console.log(vision.content)

    return (
        <div className="w-3/5">
            <h1>MY VISION</h1>
            {user.hasVision == true ? <VisionEditor vision={vision} updateVision={updateVision} setUpdateVision={setUpdateVision} handleUpdate={handleUpdate}/> : <VisionNew setNewVision={setNewVision} newVision={newVision} handleNew={handleNew}/>}
        </div>
    )
}

export default VisionSection