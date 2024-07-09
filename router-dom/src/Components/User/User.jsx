import React from 'react'
import { useParams } from 'react-router-dom'

// main.jsx me jo bhi is route pe jo bhi parameters
//  h uska access us componts ko milta hai (through use Params)
function User() {
    const {userid}=useParams();
  return (
    <div className="bg-gray-600 text-white p-4 text-4xl m-4 text-center">
      User :{userid}
    </div>
  );
}

export default User