import React, { useContext, useEffect } from 'react'
import { collection, getDoc, doc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { MyContext } from '../Context/Context'
import { SlMenu } from "react-icons/sl"

import "./detail.style.scss"


function BlogDetail() {
    const { blog: { detailBlog }, dispatch } = useContext(MyContext)
    const { id } = useParams()
    const home=useNavigate()
    const collRef = collection(db, "blog")


    async function getBlogDetail() {
        const blog = await getDoc(doc(collRef, id))
        dispatch({ type: "detailBlog", payload: blog.data().blog })
    }

    useEffect(() => {
        getBlogDetail()
    }, [])

    return (
        <>
            <main>
                <img src="img/svg3.png" className='logo-detail' alt="logo" onClick={()=>home("/")} />
            <SlMenu className="menu-btn" onClick={() => dispatch({ type: "showMenu" })}></SlMenu>
                <div className='blog'>
                    <div className='container'>
                        <div className='blog-detail-left'>
                            {detailBlog.map((elem,) => {
                                const { category,Description, Title } = elem
                                return <div className="blog-detail-left-info" key={id}>
                                    <h1>{category}</h1>
                                    <h2>{Title}</h2>
                                    <p>{Description}</p>
                                </div>
                            })}
                        </div>

                        <div className='blog-detail-right'>
                               {detailBlog.map((elem)=>{
                                return <img src={"img/"+elem.img} alt="" key={id} />
                               })}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BlogDetail



