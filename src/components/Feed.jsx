import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const userFeed = useSelector((store) => store.feed);
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (!userFeed) return;
  if (userFeed.length <= 0)
    return (
      <h1 className="flex justify-center font-bold my-10">
        No new users Found
      </h1>
    );
  return (
    <>
      {userFeed && (
        <div className="flex justify-center my-10">
          <UserCard user={userFeed[0]} feedPage={true} />
        </div>
      )}
    </>
  );
};

export default Feed;
