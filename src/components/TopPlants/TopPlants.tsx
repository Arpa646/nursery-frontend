// components/TopPlants/TopPlants.tsx
import { useGetPlantsQuery } from "@/redux/api/api";
import { TPlant } from "../../types";
import PlantCard from "../PlantCard/PlantCard";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const TopPlants = () => {
  const { data: plants, isLoading } = useGetPlantsQuery({});
  console.log(plants);

  if (isLoading)
    return (
      <p className="text-3xl text-center text-green-500 my-2 font-bold">
        Loading....
      </p>
    );

  return (
    <div className="my-5 ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/12">
          <h2
            style={{
              fontFamily: '"Libre Baskerville", serif',

              fontWeight: 500,
              color: "rgb(34, 66, 41)",
              fontSize: "19px",
            }}
            className=" md:p-1 mt-7 border-l-4 border-l-green-400 px-1"
          >
            Top Rated Plants
          </h2>
          <div className="flex flex-col items-center mt-11">
            <div className="space-y-6 text-center lg:text-left">
              <div className="text-4xl font-semibold">
                <h1
                  style={{
                    fontFamily: '"Libre Baskerville", serif',

                    fontWeight: 400,
                    color: "rgb(34, 66, 41)",
                    fontSize: "50px",
                  }}
                >
                  Most <i> Popular</i>
                </h1>
              </div>
              <div>
                <p className="text-gray-500">Meet Our Loveable plant</p>
              </div>
              <div>
                <Button className="border text-black rounded-none bg-transparent border-black">
                  <NavLink to="/shop">
                    <span
                    
                    style={{
                      fontFamily: '"Libre Baskerville", serif',
  
                      fontWeight: 400,
                      color: "rgb(34, 66, 41)",
                      
                    }}
                    >Show All Product...</span>
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-8/12 mt-5 lg:mt-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-5">
            {plants?.slice(0, 3).map((plant: TPlant) => (
              <PlantCard key={plant._id} plant={plant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlants;
