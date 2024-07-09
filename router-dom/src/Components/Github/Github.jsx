import React, { useEffect, useState } from "react";

function Github() {
  // followers will be loaded through an api call and api
  // call should be made only when the github component is loaded
  // hence useEffect is used
  const [data, setdata] = useState([]);
  useEffect(() => {
    //state so that page pe render ho jae   
    fetch("https://api.github.com/users/keshri03")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers :{data.followers}
      <img src={data.avatar_url} alt="Git Pic" />

    </div>
  );
}

export default Github;
