import React, { useEffect, useState } from "react";
import {
  useGetPlantsQuery,
  useDeletePlantMutation,
  useAddPlantMutation,
  useUpdatePlantMutation,
} from "@/redux/api/api";
import Swal from "sweetalert2";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

import "./table.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export type Plant = {
  _id?: string;
  title: string;
  rating: number;
  price: number;
  imageUrl: string;
  description: string;
  quantity?: number;
  category: string;
  stock: number;
};
export type Plant2 = {
  _id: string;
  title: string;
  rating: number;
  price: number;
  imageUrl: string;
  description: string;
  quantity?: number;
  category: string;
  stock: number;
};

const PlantTable = () => {
  const { data: plantsData } = useGetPlantsQuery({});
  const [deletePlant] = useDeletePlantMutation();
  const [updatePlant] = useUpdatePlantMutation();
  const [addPlant, { data: addPlantResult }] = useAddPlantMutation();


  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newPlantData, setNewPlantData] = useState<Plant>({
    title: "Pothos",
    description: "A popular trailing plant that is easy to care for.",
    price: 12.99,
    category: "Indoor Plants",
    imageUrl:
      "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2018/05/7-600x713.jpg",
    stock: 0,
    rating: 5,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingPlant, setEditingPlant] = useState<Plant | null>(null);

  useEffect(() => {
    if (addPlantResult) {
      toast.success("Plant added successfully!");
    }
  }, [addPlantResult]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Plant
  ) => {
    const { value } = event.target;
    if (isEditing && editingPlant) {
      setEditingPlant((prevPlant) => ({
        ...prevPlant!,
        [field]: value,
      }));
    } else {
      setNewPlantData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  const handleAddPlant = () => {
    if (!validatePlantData(newPlantData)) {
      return toast.error("Please provide all the details");
    }
    console.log(newPlantData);
    addPlant(newPlantData);
    onClose();
  };

  const handleUpdatePlant = () => {
    if (!validatePlantData(editingPlant)) {
      return toast.error("Please provide all the details");
    }

    const id = editingPlant!._id;
    const updateData = {
      title: editingPlant!.title,
      rating: editingPlant!.rating,
      price: editingPlant!.price,
      imageUrl: editingPlant!.imageUrl,
      description: editingPlant!.description,
      category: editingPlant!.category,
      stock: editingPlant!.stock, // Include the stock property here
    };

    updatePlant({ id, updateData })
      .unwrap()
      .then(() => {
        toast.success("Plant updated successfully!");
        onClose();
      })
      .catch((error) => {
        toast.error("Failed to update plant");
        console.error("Failed to update plant:", error);
      });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePlant(id)
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "Your plant has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete the plant.", "error");
            console.error("Failed to delete the plant:", error);
          });
      }
    });
  };

  const handleEdit = (plant: Plant) => {
    setIsEditing(true);
    setEditingPlant(plant);
    setNewPlantData({
      _id: plant._id,
      title: plant.title,
      rating: plant.rating,
      price: plant.price,
      imageUrl: plant.imageUrl,
      description: plant.description,
      category: plant.category,
      stock: plant.stock, // Include the stock property
    });
    onOpen();
  };

  const validatePlantData = (plant: Plant | null) => {
    if (!plant) return false;
    return (
      plant.title &&
      plant.price &&
      plant.imageUrl &&
      plant.description &&
      plant.category
    );
  };

  return (
    <div
      className={`container mx-auto ${isOpen ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex justify-end mb-5">
        <Button
          onPress={() => {
            setIsEditing(false);
            onOpen();
          }}
          className="bg-subThemeColor"
        >
          Add New Plant
          <svg
            className="w-5 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Plant List</h2>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <table>
          <caption>Statement Summary</caption>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plantsData?.map((plant: Plant2) => (
              <tr key={plant._id}>
                <td scope="row" className="flex sm:justify-between">
                  <div className="flex">
                    <img src={plant.imageUrl} alt={plant.title} width="50" />
                    <div>
                      <td className="text-2xl lg:text-[16px]">{plant.title}</td>
                    </div>
                  </div>
                </td>
                <td>{plant.rating}</td>
                <td>${plant.price.toFixed(2)}</td>
                <td>{plant.category}</td>
                <td className="flex">
                  <Button
                    className="font-normal text-black border border-black bg-transparent rounded-none px-2 py-1 mr-2"
                    onPress={() => handleEdit(plant)}
                  >
                    <CiEdit />
                  </Button>
                  <Button
                    className="font-normal text-black border border-black transparent rounded-none px-2 py-1"
                    onPress={() => handleDelete(plant._id)}
                  >
                    <MdOutlineDeleteOutline />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        className="fixed inset-0 flex items-center justify-center z-50"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-60 z-40"></div>
        <ModalContent className="bg-white rounded-lg p-6 mx-auto z-50 w-full max-w-lg max-h-screen overflow-y-auto">
          <ModalHeader className="flex justify-between items-center gap-1 text-lg font-bold text-gray-800">
            {isEditing ? "Edit Plant" : "Add Plant"}
          </ModalHeader>
          <ModalBody className="w-full space-y-1">
            <Input
              required
              onChange={(e) => handleInputChange(e, "title")}
              type="text"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Title"
              value={isEditing ? editingPlant?.title : newPlantData.title}
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "rating")}
              type="number"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Rating"
              value={isEditing ? editingPlant?.rating : newPlantData.rating}
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "price")}
              type="number"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Price"
              value={isEditing ? editingPlant?.price : newPlantData.price}
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "imageUrl")}
              type="text"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Image URL"
              value={isEditing ? editingPlant?.imageUrl : newPlantData.imageUrl}
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "description")}
              type="text"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Description"
              value={
                isEditing ? editingPlant?.description : newPlantData.description
              }
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "category")}
              type="text"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Category"
              value={isEditing ? editingPlant?.category : newPlantData.category}
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "stock")}
              type="number"
              className="rounded-md focus:border-subThemeColor focus-visible:outline-subThemeColor border-gray-300 bg-white p-2 shadow-sm w-full"
              placeholder="Stock"
              value={isEditing ? editingPlant?.stock : newPlantData.stock}
            />

            <Button
              className="bg-subThemeColor  border border-black text-black  px-4 py-2 shadow-md"
              onPress={isEditing ? handleUpdatePlant : handleAddPlant}
            >
              {isEditing ? "Update" : "Add"}
            </Button>
            <Button
              className="border border-black rounded-none text-black  px-4 py-2 "
              onPress={onClose}
            >
              Close
            </Button>
          </ModalBody>

          <ModalFooter className="w-full  flex flex-col md:flex-row justify-end gap-1 pt-2"></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PlantTable;
