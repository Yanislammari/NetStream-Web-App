import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MediaContainer from "../../components/MediaContainer/MediaContainer";
import Media from "../../models/Media";
import { toast } from "sonner";
import { getAllMedias } from "../../services/MediaService";
import "./Search.css";

const Search: React.FC = () => {
  const [allMedias, setAllMedias] = useState<Media[]>([]);
  const [filteredMedias, setFilteredMedias] = useState<Media[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q")?.toLowerCase();

  useEffect(() => {
    const fetchMedias = async () => {
      try {
        const fetchedMedias = await getAllMedias();
        if(fetchedMedias === "Internal servor error !") {
          toast.error("Internal server error !");
          return;
        }
        setAllMedias(fetchedMedias as Media[]);
      }
      catch(err) {
        toast.error("Internal server error !");
      }
    };

    fetchMedias();
  }, []);

  useEffect(() => {
    if(search) {
      const filtered = allMedias.filter((media) => media.name.toLowerCase().includes(search));
      setFilteredMedias(filtered);
    }
    else {
      setFilteredMedias(allMedias);
    }
  }, [search, allMedias]);

  return (
    <div className="Search">
      <Navbar isSearchOpen={true} searchInputDefaultValue={search} />
      <h1>{`Results for "${search}" :`}</h1>
      <MediaContainer medias={filteredMedias} />
    </div>
  );
};

export default Search;
