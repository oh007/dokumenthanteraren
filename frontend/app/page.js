"use client";
import Image from 'next/image'
import Mainpage from './components/Mainpage'
import { useEffect, useState} from "react";



export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
      console.log(postsFromApi[0].docTitle)
    };
    getPosts();
  }, []);
  console.log()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      {posts.map((post) => (
     <Mainpage key={post.id} docs={post} > </Mainpage>    ))}
    </main>
  )
}
