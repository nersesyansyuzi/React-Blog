import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"
import { SlMenu } from "react-icons/sl"
import { useContext, useEffect } from "react";
import { MyContext } from '../Context/Context'
import Blog from './Blog';
import "./home.style.scss"

function Home() {
  const { dispatch } = useContext(MyContext)

  useEffect(() => {
    dispatch({ type: "deletDetailBlog" })
  }, [])

  return (
    <div className="App">
      <main>
        <div className='blog-home'>
          <SlMenu className="menu-btn" onClick={() => dispatch({ type: "showMenu" })}></SlMenu>
          <div className="slider-reg">
            <AiFillRightCircle className="btn-right" onClick={() => dispatch({ type: "decId" })} ></AiFillRightCircle>
            <AiFillLeftCircle className="btn-left" onClick={() => dispatch({ type: "incId" })}></AiFillLeftCircle>
          </div>
          <Blog />
        </div>


      </main>
    </div>
  )
}

export default Home

