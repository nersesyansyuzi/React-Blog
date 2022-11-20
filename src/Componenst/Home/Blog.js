import { collection, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/Context'
import { db } from '../firebase'
import "./home.style.scss"
import { useNavigate } from 'react-router-dom'

function Blog() {

    const { blog: { posts, load, sliderId }, dispatch } = useContext(MyContext)
    const colRef = collection(db, "blog")
    const detailNav = useNavigate()

    function sliceText(str, num) {

        if (num < str.length) return str.slice(0, num) + " ..."
        else return str

    }


    useEffect(() => {
        let post = []
        onSnapshot(colRef, (snapshot) => {
            snapshot.forEach((doc) => {
                post.push({ ...doc.data().blog, id: doc.id })
                dispatch({ type: "addBlog", payload: post })
            })
        })
    }, [])

    return (
        <>
            {load ?
                <>
                    <div className='blog-left'>
                        <img src="img/svg3.png" className="logo" alt="logo" />


                        <div className='div'>
                            {posts.map((elem, index) => {
                                const { category, id, Description, Title } = elem

                                let position = "next"
                                if (sliderId === index)
                                    position = "active"
                                if (index === sliderId - 1 || (sliderId === 0 && index === posts.length - 1))
                                    position = "last"

                                return <div className={"blog-left-info" + " " + position} key={id}>
                                    <h1>{category}</h1>
                                    <h2>{Title}</h2>
                                    <p>{sliceText(Description, 130)}</p>
                                    <button onClick={() => detailNav(id)}>Read More</button>
                                </div>
                            })}
                        </div>

                    </div>

                    <div className='blog-right'>
                        {posts.map((elem, index) => {
                            const { id, img, } = elem
                            let position = "next"
                            if (sliderId === index)
                                position = "active"
                            if (index === sliderId - 1 || (sliderId === 0 && index === posts.length - 1))
                                position = "last"
                            return <img src={"img/" + img} alt="" className={"slider-img" + " " + position} key={id} />
                        })}
                    </div>
                </>
                : <div className="spin-wrapper">
                    <div className="spinner"></div>
                </div>
            }
        </>
    )
}

export default Blog