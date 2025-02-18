import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import PostCard from './assets/post'
import './assets/Post.css'


function App() {
//   const getAllCars = async () => {
//     const request = await axios.get("http://localhost:8080/api/cars/all")
//     const response = await request.data
//     console.table(response)
//     return response
// }
// const retriveData = async () => {
//   console.log("loading Characters in")
//   const request = await fetch("https://rickandmortyapi.com/api/character")
//   const response = await request.json(); 
//   console.log("setting characters")
//   setCharacters(response.results)
// }
const [posts, setPosts] = useState([]);

// Fetch posts when component mounts
useEffect(() => {
  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data); // Correctly update the state with API data
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  getPosts(); // Call the function inside useEffect
}, []); // Empty dependency array ensures it runs once when mounted

  return (
    <>
      <div className="container">
        {posts.map(post => (
          <PostCard key={post.id} id={post.id} userId = {post.userId} title={post.title} body={post.body} />
        ))}
      </div>
      
    </>
  )
}

export default App
