import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryChoice from "../../components/CategoryChoice/CategoryChoice";
import MediaSlideshow from "../../components/MediaSlideshow/MediaSlideshow";
import Media from "../../models/Media";
import Category from "../../models/Category";
import { getAllMediasByCategory } from "../../services/MediaService";
import { toast } from "sonner";
import "./Series.css";

const Series: React.FC = () => {
  const [allMediasByCategory, setAllMediasByCategroy] = useState<{ category: Category, medias: Media[] }[]>([]);
  const navigate = useNavigate();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    if(selectedCategory !== "Category") {
      navigate(`/series/${selectedCategory}`);
    }
  };

  useEffect(() => {
    const fetchMediaByCategory = async (category: Category) => {
      try {
        const fetchedMediasByCategroy = await getAllMediasByCategory(category);
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

    Object.values(Category).forEach((category) => {
      fetchMediaByCategory(category);
    });
  }, []);

  return (
    <div className="Series">
      <Navbar />
      <CategoryChoice title="Series" selectAction={handleCategoryChange} defaultCategory="Category"/>
      {allMediasByCategory.map(({ category, medias }) => (
        medias.length > 0 && (
          <MediaSlideshow key={category} title={category} medias={medias} />
        )
      ))}
    </div>
  )
};

export default Series;
