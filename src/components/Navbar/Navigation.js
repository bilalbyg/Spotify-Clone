import { Icon } from "../../Icons"
import { useNavigate } from "react-router-dom"

function Navigation() {

    const navigate = useNavigate()

    function prevPage(){
        navigate(-1);
    }

    function nextPage(){
        navigate( 1);
    }

  return (
    <nav className="flex items-center gap-x-4">
        <button onClick={prevPage} className="w-8 h-8 flex items-center justify-center rounded-full opacity-60 
                            bg-black bg-opacity-70">
            <Icon size={22} name="back"></Icon>
        </button>
        <button onClick={nextPage} className="w-8 h-8 flex items-center justify-center rounded-full opacity-60 
                            bg-black bg-opacity-70">
            <Icon size={22} name="next"></Icon>
        </button>
    </nav>
  )
}

export default Navigation
