import { useState, useEffect } from "react";

import PlantCard from "@/components/PlantCard/PlantCard";
import { TPlant } from "@/types";
import Pagination from "@/components/PlantCard/Pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useGetPlantsQuery } from "@/redux/api/api";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const postsPerPage = 6;
  const { data: plantsData, isLoading } = useGetPlantsQuery({});
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants =
    plantsData &&
    plantsData.filter((plant: TPlant) => {
      const inCategory =
        selectedCategory === "All" || plant.category === selectedCategory;
      const inPriceRange =
        plant.price >= priceRange[0] && plant.price <= priceRange[1];
      const matchesSearch = plant.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return inCategory && inPriceRange && matchesSearch;
    });

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page whenever category, sort option, or price range changes
  }, [selectedCategory, sortOption, priceRange, searchQuery]);

  const sortedPlants =
    filteredPlants &&
    filteredPlants.slice().sort((a: TPlant, b: TPlant) => {
      switch (sortOption) {
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        // case "rating":
        //   return b.rating - a.rating;
        // case "popularity":
        //   return b.popularity - a.popularity;
        default:
          return 0;
      }
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    sortedPlants && sortedPlants.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/12 mb-6 md:mb-0">
          <h1 className="text-2xl mb-4">Categories</h1>
          <div className="flex flex-col space-y-4">
            <Button
              className={`border rounded-none bg-transparent text-black hover:bg-gray-200 hover:text-black ${
                selectedCategory === "All" ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Button>
            <Button
              className={`border rounded-none bg-transparent text-black hover:bg-gray-200 hover:text-black ${
                selectedCategory === "Indoor Plants" ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory("Indoor Plants")}
            >
              Indoor Plants
            </Button>
            <Button
              className={`border rounded-none bg-transparent text-black hover:bg-gray-200 hover:text-black ${
                selectedCategory === "Outdoor Plants" ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory("Outdoor Plants")}
            >
              Outdoor Plants
            </Button>
            <Button
              className={`border rounded-none bg-transparent text-black hover:bg-gray-200 hover:text-black ${
                selectedCategory === "Gardening Tools" ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory("Gardening Tools")}
            >
              Gardening Tools
            </Button>
            <Button
              className={`border rounded-none bg-transparent text-black hover:bg-gray-200 hover:text-black ${
                selectedCategory === "Soil & Fertilizers" ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory("Soil & Fertilizers")}
            >
              Soil & Fertilizers
            </Button>
          </div>

          <h1 className="mt-6 mb-4">Price Range</h1>
          <div className="px-4">
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={priceRange}
              onChange={(value) => {
                if (typeof value === "number") {
                  // Handle single value (if needed)
                  setPriceRange([value, priceRange[1]]);
                } else {
                  // Handle range value
                  setPriceRange(value);
                }
              }}
              className="mb-4"
            />
            <div className="flex justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="md:w-9/12">
          <div className="flex justify-end mb-6">
            <div className="header flex items-center justify-between mb-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by name..."
                className="border border-black p-[11px] me-3 rounded-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select onValueChange={(value) => setSortOption(value)}>
              <SelectTrigger className="w-[180px] rounded-none border border-black text-black">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-white">
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="price_asc">Price - Low to High</SelectItem>
                  <SelectItem value="price_desc">
                    Price - High to Low
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="my-5">
            <div className="plant-category-section">
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mx-auto my-5">
                {currentPosts.map((plant: TPlant) => (
                  <PlantCard key={plant._id} plant={plant} />
                ))}
              </div>

              <Pagination
                totalPosts={sortedPlants.length} // Update to use sortedPlants length for pagination
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
