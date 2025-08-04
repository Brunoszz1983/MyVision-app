import {useUser} from '../context/userContext'

const Header = () => {
    const { user , setUser} = useUser()

    return (
        <header className="w-full mx-auto flex bg-black text-white px-8">
            <div className="w-1/5">My Vision App</div>
            <div className="w-4/5 text-right">{user.name}</div>
        </header>
    )
}

export default Header