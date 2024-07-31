import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useUpdatePlantMutation } from "@/redux/api/api";
import { TPlant } from "../../types/index";
import RatingStars from "./Rating"; // Import the RatingStars component

interface PlantCardProps {
  plant: TPlant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [updatePlant] = useUpdatePlantMutation();

  const handleAddToCart = async () => {
    if (plant.stock && plant.stock > 0) {
      dispatch(addToCart(plant));
      try {
        const updateData = { ...plant, stock: plant.stock - 1 };
        const id = updateData._id;

        if (id) {
          await updatePlant({ id, updateData });
          setAlert(false);
        } else {
          console.error("Plant ID is undefined");
        }
      } catch (error) {
        console.error("Failed to update plant quantity:", error);
      }
    } else {
      window.alert("Sold out");
    }
  };

  return (
    <Card className="text-center md:w-[300px] border-none text-white rounded-none hover:shadow-2xl transition-shadow duration-300">
     
        <CardHeader className="p-2">
          <img
            src={plant.imageUrl}
            style={{ backgroundColor: "#F9F9F9" }}
            className="h-[250px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            alt={plant.title}
          />
        </CardHeader>
 
      <div className="flex items-center justify-between">
        <div>
          <CardContent className="grid p-4">
            <CardTitle
              style={{
                fontFamily: '"Libre Baskerville", serif',
                fontWeight: 400,
                color: "rgb(34, 66, 41)",
                fontSize: "19px",
              }}
              className="text-gray-700 text-1xl"
            >
              {plant.title}
            </CardTitle>
            <div
              style={{
                fontFamily: '"Libre Baskerville", serif',
                fontWeight: 400,
                color: "rgb(34, 66, 41)",
                fontSize: "15px",
              }}
              className="text-1xl"
            >
              BDT {plant.price}
            </div>
            {/* Render the RatingStars component */}
            {plant.rating !== undefined && (
              <RatingStars rating={plant.rating} />
            )}
          </CardContent>
        </div>

        <div className="mt-3">
          <CardFooter className=" flex flex-col">

          <Link to={`/plant/${plant._id}`}>
          <span className="text-black border-b-1 border-gray-500">  View Details..</span>
            </Link>


            <Button
              style={{
                fontFamily: '"Libre Baskerville", serif',
                fontWeight: 400,
                color: "rgb(34, 66, 41)",
                fontSize: "15px",
              }}
              className="bg-transparent mx-auto mt-2 border border-black rounded-none hover:border-green-900  hover:bg-transparent"
              onClick={handleAddToCart}
            >
              {plant.stock === 0 ? "Sold Out" : "Add to Cart"}
            </Button>
           
          </CardFooter>
        </div>
      </div>

      {alert && (
        <div className="mt-2 text-red-500">The product is not available.</div>
      )}
    </Card>
  );
};

export default PlantCard;
