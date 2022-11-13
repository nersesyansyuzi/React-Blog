export function reducer(state,action){
    const {type,payload}=action
   switch(type){
    case "showMenu":
        return {...state,showMenu:!state.showMenu}
    case "addBlog":
        return {...state,posts:payload}
    case "detailBlog":
        return {...state,detailBlog:[payload]}    
    case "deletDetailBlog":
        return {...state,detailBlog:[]}
    case "incId":
        if(state.sliderId <state.posts.length-1) return {...state,sliderId:state.sliderId+1}   
        else return   {...state,sliderId:0}
        case "decId":
        if(state.sliderId<=0) return {...state,sliderId:state.posts.length-1}    
        else return {...state,sliderId:state.sliderId-1}   
   }
   
}