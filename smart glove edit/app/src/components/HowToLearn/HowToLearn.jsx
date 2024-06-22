// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function HowToLearn() {
//   const [allPosts, setAllPosts] = useState([]); // Initialized as an empty array to ensure .map() is always safe
//   var token = localStorage.getItem("userToken");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getAllPosts() {
//       if (!token) {
//         console.log("No token found.");
//         setError("Authentication token is missing.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get("https://sg.rd-tech.org/mobile_api/lessons/", {
//           headers: { Authorization: `Token ${token}` },
//         });
//         console.log("API data received:", response.data);
//         if (response.data && Array.isArray(response.data)) {
//           setAllPosts(response.data);
//         } else {
//           setError("Data format incorrect or data is empty.");
//         }
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.toString());
//       }
//       setLoading(false);
//     }
//     getAllPosts();
//   }, [token]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading posts: {error}</p>;

//   return (
//     <div className="container">
//       <div className="row">
//         {allPosts.map((post, index) => (
//           <div key={index} className="col-md-4">
//             <div className="post">
//               <div className="post">
//               <Link href={post.url} target="_blank" rel="noopener noreferrer">
//                 <img src={post.thumbnail} className="w-100" alt="Thumbnail for post" />
//                 <h3>{post.title}</h3>
//               </Link>
//               </div>
//               </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HowToLearn;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HowToLearn.module.css";

function HowToLearn() {
  const [allPosts, setAllPosts] = useState([]); // Initialized as an empty array to ensure .map() is always safe
  var token = localStorage.getItem("userToken");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllPosts() {
      if (!token) {
        console.log("No token found.");
        setError("Authentication token is missing.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://sg.rd-tech.org/mobile_api/lessons/",
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        console.log("API data received:", response.data);
        if (response.data && Array.isArray(response.data)) {
          setAllPosts(response.data);
        } else {
          setError("Data format incorrect or data is empty.");
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.toString());
      }
      setLoading(false);
    }
    getAllPosts();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error}</p>;

  return (
    <div className="container my-5">
      <div className="row">
        {allPosts.map((post, index) => (
          <div key={index} className="col-md-4">
            <div className="post my-3">
              <div className="post my-3 ">
                <Link to={post.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`https://sg.rd-tech.org${post.thumbnail}`}
                    className="w-100 rounded-7 mt-3"
                    alt="Thumbnail for post"
                  />
                  <h3 className="title" style={{marginTop: "15px", textAlign: "center"}}>{post.title}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToLearn;
