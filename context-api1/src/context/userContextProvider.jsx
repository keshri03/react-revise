import React, { useState } from "react";
import UserContext from "./UserContext";


// children- jo bhi aa rha usko at it is pass krdo (generic name)
const UserContextProvider=({children})=>{
    const [user, setUser]=useState(null);
    return (
        // Provider-property of UserContext
        //val= kya kya data provide karna chaahte
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider;