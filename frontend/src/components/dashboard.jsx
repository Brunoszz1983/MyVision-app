import VisionSection from '../features/vision/visionSection'
import SmartTasks from '../features/tasks/smartTasks'

const Dashboard = () => {

    return (
        <section className="w-full mx-auto flex px-8">
            <aside className="w-3/10">
                <VisionSection />
            </aside>
            <div className="w-7/10 bg-white ml-4 px-4 py-4 rounded-md">
                <SmartTasks />
            </div>
            
        </section>
    )
}

export default Dashboard