import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CommentContext = createContext();

function CommentProvider(props) {
  const { children } = props;
  const url = "http://localhost:4000/api/comments";
  const [comments, setcomments] = useState([]); //מערך שך האנימלס שהוסתוופסו
  const [errorMsg, setErrorMsg] = useState(null);

  //add new comment
  const addNewComment = async (commentobj) => {
    try {
      const response = await axios.post(url, commentobj, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });

      setcomments([...comments, ...response.date]);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  //get all comments
  const getComments = async () => {
    try {
      const response = await axios.get(url, {});
      console.log(response);
      setcomments(response.data);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <div>
      <CommentContext.Provider
        value={{
          addNewComment,
          comments,
          getComments,
        }}
      >
        {children}
      </CommentContext.Provider>
    </div>
  );
}

export default CommentProvider;
