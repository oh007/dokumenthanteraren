"use client"
import React, { useState, useEffect } from "react";
import MyDocs from "./Docs";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showInputs, setShowInputs] = useState(false);

  const getPosts = async () => {
    try {
      const result = await fetch("/api");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
    } catch (error) {
      console.error('Något gick fel vid hämtning av data:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleAddNewDoc = () => {
    setShowInputs(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveDoc = async () => {
    console.log(title,content)
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           title,content 
        }),
      });
  
      if (response.ok) {
        console.log(title,content)
        setTitle('');
        setContent('');
        setShowInputs(false);
        getPosts(); 
      } else {
        console.error("Något gick fel vid POST-förfrågan");
      }
    } catch (error) {
      console.error("Något gick fel vid POST-förfrågan:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-screen flex flex-col m-auto items-center">
        
      <div className="flex items-center text-center">
        {showInputs ? (
          <div>
            <input
              type="text"
              placeholder="Document Title"
              value={title}
              onChange={handleTitleChange}
            />
            <input
              type="text"
              placeholder="Document Content"
              value={content}
              onChange={handleContentChange}
            />
            <button onClick={handleSaveDoc}>Save</button>
          </div>
        ) : (
          <button
            className="flex w-40 place-content-around bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleAddNewDoc}
          >
            <FontAwesomeIcon icon={faPlus} size="xs" className="w-5" />
            <p className="font-light">Add new doc</p>
          </button>
        )}
        </div>
        <h2 className="font-bold pb-4">My docs</h2>
        
        {posts.map((post, index) => (
          <MyDocs
            key={post.id}
            docTitle={post.docTitle}
            docContent={post.docContent}
            createDate={post.createDate}
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;
