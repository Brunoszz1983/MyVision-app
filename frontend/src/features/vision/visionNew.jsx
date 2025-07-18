const VisionNew = ({newVision, setNewVision,handleNew}) => {
    const handleNewVision = (event) => {
        setNewVision(event.target.value)
    }
    return (
        <div className="w-full">
            <p>Please insert your Vision here...</p>
            <form onSubmit={handleNew}>
            <div><input className="border" value={newVision} onChange={handleNewVision}></input></div>
            <div><button type="submit">Publish</button></div>
            </form>
        </div>
    )
}

export default VisionNew