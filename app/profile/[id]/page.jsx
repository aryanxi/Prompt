"use client";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";

import React from "react";

const UserProfile = ({params}) => {
    
const searchParams = useSearchParams();
const userName = searchParams.get("name")
const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };
    if (params?.id) fetchPosts();
  }, []);
  return (
    <Profile
      name={`${userName}'s`}
      desc={`"Welcome to ${userName}'s profile! Discover their latest prompts and get inspired by their creativity. Dive in and explore what they've shared!"`}
      data={userPosts}
    />
  );
};

export default UserProfile;
