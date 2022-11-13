import React, { useContext, useEffect } from 'react'
import { SlMenu } from "react-icons/sl"
import { MyContext } from '../Context/Context'
import "./createBlog.style.scss"
import {addDoc,collection} from "firebase/firestore"
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'

function CreateBlog() {
    const {  dispatch } = useContext(MyContext)
    const collRef=collection(db,"blog")
    const home=useNavigate()
   
  async function onSubmit(e){
        e.preventDefault() 
        if(!e.target.children[3].files[0]) return
        const blog={...Object.fromEntries(...[new FormData(e.target)]),img:e.target.children[3].files[0].name}
         await addDoc(collRef,{blog})
    }

    return (
        <main>
            <div className="container">
            <img src="img/svg3.png" className='logo-create' alt="logo" onClick={()=>home("/")} />
                <SlMenu className="menu-btn" onClick={() => dispatch({ type: "showMenu" })}></SlMenu>
                <div className='create-blog-title'>
                    <h1>Create blog</h1>
                    <img src="img/svg3.png" alt="logo" className='create-blog-logo' />
                </div>
                <div className='section'>
                    <div className='section-info'>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder='Title' name="Title" />
                            <label htmlFor="select1" className='custom-select'>
                                <select name="category" id='select1' >
                                    <option >Please selet category</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Politics">Politics</option>
                                    <option value="Business">Business</option>
                                </select>
                            </label>
                            <textarea placeholder="Description" name='Description' ></textarea>
                            <input type="file"  className="custom-file-input"/>
                            <input type="submit" value="create" onSubmit={onSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateBlog