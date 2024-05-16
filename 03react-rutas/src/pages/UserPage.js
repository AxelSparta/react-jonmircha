import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <p>Usuario {userId}</p>
    </div>
  );
};

export default UserPage;
