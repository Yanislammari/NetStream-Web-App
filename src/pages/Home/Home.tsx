import React from "react";
import { useParams } from "react-router-dom";

const Home: React.FC = () => {
  const { accountId } = useParams();

  return (
    <div className="Home">
      <h1>Home {accountId}</h1>
    </div>
  );
};

export default Home;
