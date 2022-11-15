import { createContext, useReducer } from "react"
import { reducer } from "./Reducer"


export const MyContext=createContext(null)


function Context({children}) {
  
    const [blog,dispatch]=useReducer(reducer,{
      posts:[],
      detailBlog:[],
      showMenu:false,
      sliderId:0,
      load:false,
    })

  return (
    <MyContext.Provider value={{blog,dispatch}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context