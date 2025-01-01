import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import Category from "../../models/Category";
import { getAllMediaByCategory } from "../../services/MediaService";
import { toast } from "sonner";
import "./Series.css";

const Series: React.FC = () => {
  const [allMediasByCategory, setAllMediasByCategroy] = useState<{ category: Category, medias: Media[] }[]>([]);

  useEffect(() => {
    const fetchMediaByCategory = async (category: Category) => {
      try {
        const fetchedMediasByCategroy = await getAllMediaByCategory(category);
        switch(fetchedMediasByCategroy) {
          case "Error in category request !": {
            toast.error("Error in category request !");
            return;
          }
          case "Internal servor error !": {
            toast.error("Internal servor error !");
            return;
          }
          default: {
            setAllMediasByCategroy((prev) => [...prev, { category: category, medias: fetchedMediasByCategroy as Media[] }]);     
            return;     
          }
        }
      }
      catch(err) {
        toast.error("Internal servor error !");
        return;
      }
    };

    Object.values(Category).map((category) => {
      fetchMediaByCategory(category);
    });

    console.log(allMediasByCategory);
  }, []);

  return (
    <div className="Series">
      <Navbar />
      {allMediasByCategory.map(({ category, medias }) => (
        medias.length > 0 && (
          <MediaSlideshow key={category} title={`Category: ${category}`} medias={medias} />
        )
      ))}
    </div>
  )
};

export default Series;
