// import { useEffect, useState } from "react";

// function Github() {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         setLoading(true);
//         const url = "https://api.github.com/users/codehb01";
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Error in fetching data");
//         const data = await response.json();
//         setUserData(data);
//         setError(null);
//       } catch (error) {
//         setError(error.message);
//         setUserData(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, []);
//   return (
//     <div className="py-16 bg-white">
//       <div className="p-20 bg-gray-200 h-96">
//         {loading && <p className="text-center">Loading...</p>}
//         {error && <p className="text-red-900 text-center">{error}</p>}
//         {!loading && !error && userData && (
//           <div className="bg-white p-20">
//             <h1 key={userData.id} className=" ">
//               {userData.name}
//             </h1>
//             <h1 key={userData.id} className="">
//               {userData.bio}
//             </h1>
//             <h1 key={userData.id} className="">
//               Followers: {userData.followers}<br></br>
//               Following: {userData.following}
//             </h1>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Github;

import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/codehb01")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      {data.name} = Followers:{data.followers}
      <img src={data.avatar_url} width={300}></img>
    </div>
  );
}

export default Github;
