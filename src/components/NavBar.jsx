import { Link } from "react-router-dom";


export default function NavBar() {


    function ChangeTool(props) {

      const color = "bg-white hover:bg-gray-700"
      // Switch color for each tool
      if (window.location.href === props.path)
        color = "bg-orange hover:bg-red-700"
      
      console.log(window.location.href)
      return <a className={`${color} h-5 w-5 rounded-full mb-[50px]`}/>
    }

    return (
      <div className={`absolute justify-center flex flex-row w-full h-screen items-end gap-5`}>
        <Link to="/"> <ChangeTool path="/"/> </Link>
        <Link to="/unity"> <ChangeTool path="/unity"/> </Link>
        <Link to="/python"> <ChangeTool path="/python"/> </Link>
      </div>
    )
}