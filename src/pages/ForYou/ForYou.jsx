import React from "react";
import { mockPosts } from "@/mockDatas/mockPosts";
import PostItem from "@/components/PostItem/PostItem";

function ForYou() {
  return (
    <div>
     {
      mockPosts.map(post=>{
        return(
          <>
          <PostItem key={post.id} {...post}/>
          </>
        )
      })
     }
    </div>
  );
}

export default ForYou;
