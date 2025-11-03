import PostItem from "@/components/PostItem/PostItem";
import { mockPostsFollowing } from "@/mockDatas/mockPostsFollowing";
import React from "react";

function Following() {
  return (
    <div>
      {mockPostsFollowing.map((post) => {
        return (
          <>
            <PostItem key={post.id} {...post} />
          </>
        );
      })}
    </div>
  );
}

export default Following;
