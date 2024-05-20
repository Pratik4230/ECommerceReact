import { useContext } from "react"
import { Link } from "react-router-dom"
import userContext from "../../utils/userContext"


const Header = () => {

  const {username} = useContext(userContext)
  console.log("data" ,username)

  return (
    <div>
        <nav className="flex bg-slate-300 p-3 justify-between">
            <div><img src="" alt="Image" /></div>

            <ul className="flex bg-blue-200 p-3 w-1/3 justify-evenly text-lg" >
                <li className="cursor-pointer p-2 rounded-lg hover:bg-blue-500  hover:text-white"> <Link to={'/'}> Home </Link> </li>
                <li className="cursor-pointer p-2 rounded-lg hover:bg-blue-500  hover:text-white"> <Link to={'/'}> Contact </Link> </li>
                <li className="cursor-pointer p-2 rounded-lg hover:bg-blue-500  hover:text-white"> <Link to={'/'}> About </Link> </li>
                <li className="cursor-pointer p-2 rounded-lg hover:bg-blue-500  hover:text-white"> <Link to={'/'}> Cart </Link> </li>
                <li className="cursor-pointer p-2 rounded-lg hover:bg-blue-500  hover:text-white">  {username}</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header