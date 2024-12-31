import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Media from "../../models/Media";
import "./Series.css";

const Series: React.FC = () => {
  const [mediasComedy, setMediasComedy] = useState<Media[]>([]);

  useEffect(() => {
  }, []);

  return (
    <div className="Series">
      <Navbar />
    </div>
  )
};

export default Series;
