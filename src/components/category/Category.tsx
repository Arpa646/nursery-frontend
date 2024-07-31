import { useState } from "react";
import { GiCursedStar } from "react-icons/gi";
import PlantCard from "@/components/PlantCard/PlantCard";
import { TPlant } from "@/types";
import Pagination from "@/components/PlantCard/Pagination";

import { useGetPlantsQuery } from "@/redux/api/api";
const PlantCategorySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const { data: plantsData, isLoading } = useGetPlantsQuery({});
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    plantsData && plantsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="plant-category-section">
      <div className="header">
        <h3>Top Rated Plants</h3>
        <GiCursedStar />
      </div>
      <div className="categories grid md:grid-cols-4 sm:grid-cols-1 gap-4 mx-auto my-5">
        {currentPosts.map((plant: TPlant) => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
      <Pagination
        totalPosts={plantsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PlantCategorySection;
