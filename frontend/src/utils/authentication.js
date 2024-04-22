export const isAuth = ()=>{
    const jwt = localStorage.token
    if(jwt){
        return true
    }

    return false
}