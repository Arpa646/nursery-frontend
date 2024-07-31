/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetSinglePlantQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { useUpdatePlantMutation } from "@/redux/api/api";
export default function PlantDetails() {
  const { id } = useParams();
  const { data: plant, isLoading } = useGetSinglePlantQuery(id as string);
  const dispatch = useDispatch();
  const [, setAlert] = useState(false);
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
  if (isLoading) {
    return (
      <p className="text-3xl text-center text-black my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center p-4 text-black min-h-screen">
        <div className="max-w-6xl w-full  rounded-lg  p-6 animate__animated animate__fadeIn">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <img
                style={{ backgroundColor: "#F9F9F9" }}
                src={plant?.imageUrl}
                alt="Plant Image"
                className="w-full mb-4 h-[500px]   transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-2/3 px-4  ">
              <div className=" ms-5 text-gray-400 mb-4 space-y-7">
                <div>
                  <h1
                    style={{
                      fontFamily: '"Libre Baskerville", serif',

                      fontWeight: 400,
                      color: "rgb(34, 66, 41)",
                    }}
                    className="text-2xl  text-black font-semibold mb-4"
                  >
                    {plant?.title}
                  </h1>
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: '"Libre Baskerville", serif',

                      fontWeight: 300,
                      color: "rgb(34, 66, 41)",
                    }}
                    className="text-2xl text-black    font-semibold mb-4"
                  >
                    BDT {plant?.price}
                  </h1>
                </div>
                <hr />
                <div>
                  <p
                    style={{ color: "rgb(130, 135, 135)" }}
                    className="text-justify  text-black mb-4"
                  >
                    {plant?.description}
                  </p>
                </div>

                <div>
                  {" "}
                  <Button className=" bg-transparent  text-black  border hover:text-white  rounded-none p-5 me-3">
                    - 1 +{" "}
                  </Button>
                  <Button
                    style={{
                      fontFamily: '"Libre Baskerville", serif',
                      fontWeight: 400,

                      fontSize: "15px",
                    }}
                    className="bg-black  text-white mx-auto border border-black rounded-none hover:border-green-900  hover:bg-transparent"
                    onClick={handleAddToCart}
                  >
                    {plant.stock === 0 ? "Sold Out" : "Add to Cart"}
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="">
                    <span className=" text-[19px] text-black">
                      Category: {plant?.category}
                    </span>{" "}
                  </div>
                  <div className="">
                    <span className="  text-[19px] text-black">
                      Rating: {plant?.rating}
                    </span>{" "}
                  </div>
                  <div className="">
                    <span className="  text-[19px] text-black">
                      Stock: {plant?.stock}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div
        style={{ fontFamily: " Libre Baskerville" }}
        className="flex text-gray-900  text-3xl justify-center  space-x-7"
      >
        <h1 className=" border-gray-900 border-b-2">description</h1>
        <h1 className=" border-gray-900 border-b-2">Reviews (0)</h1>
      </div>
      <div style={{ color: "rgb(130, 135, 135)" }} className="container mt-16">
        {plant.instruction?.instruction}
      </div>
    </div>
  );
}
