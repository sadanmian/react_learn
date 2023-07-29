import React from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  return <div>Details about user {userId}</div>;
};

export default UserDetails;
