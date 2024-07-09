// can be  login context, product context
// context folder name is not mandatory..but commonl` used

import React from "react";

const UserContext = React.createContext();

// each context gives a provider (data provvide kreag(provider banana padta) and it will be used as wrapper such all compnents inside that 
// will get access of userContext (like global variable)

export default UserContext;
