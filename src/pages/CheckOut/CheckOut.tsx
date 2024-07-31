import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { increaseQuantity, decreaseQuantity } from "@/redux/cartSlice";
import { NavLink } from "react-router-dom";
// import { TPlant } from "@/types/index";
import { TPlant } from '../../types';
import { RootState } from '@/redux/store';
export default function CheckOut() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.items);

  // Initialize quantities state based on the products in the cart
  const [quantities, setQuantities] = useState(
    products.map((product) => product.quantity || 1) 
  );

  const handleIncreaseQuantity = (index: number, productId: string) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
    dispatch(increaseQuantity(productId)); // Dispatch the action to update the Redux store
  };

  const handleDecreaseQuantity = (index: number, productId: string) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
      dispatch(decreaseQuantity(productId)); // Dispatch the action to update the Redux store
    }
  };

  const subtotal = products.reduce(
    (acc: number, item: TPlant, index: number) =>
      acc + item.price * quantities[index],
    0
  );

  return (
    <div className="min-h-screen p-4 text-black">
      <div className="flex flex-col items-center max-w-6xl mx-auto p-6">
        <div className="flex flex-col gap-5 w-full md:flex-row">
          <div className="md:w-8/12 overflow-auto">
            <table className="min-w-full divide-y border divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product: TPlant, index: number) => (
                  <tr key={product._id} className="space-y-4">
                    <td className="px-6 flex items-center py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <img
                        style={{ backgroundColor: "rgb(238,238,238)" }}
                        className="w-20"
                        src={product.imageUrl}
                        alt={product.title}
                      />
                      <div className="ml-5">{product.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button className="space-x-4 hover:text-white px-4 py-2 bg-transparent rounded-none border text-black border-gray-400">
                      <button
            onClick={() => {
              if (product._id) {
                handleDecreaseQuantity(index, product._id);
              } else {
                console.error('Product ID is undefined');
              }
            }}
          >
       -
          </button>
                        <span>{quantities[index]}</span>
                        <button
            onClick={() => {
              if (product._id) {
                handleIncreaseQuantity(index, product._id);
              } else {
                console.error('Product ID is undefined');
              }
            }}
          >
          +
          </button>
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${(product.price * quantities[index]).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex mt-5">
              <input
                style={{ border: "1px solid rgb(229,231,235)" }}
                type="text"
                className="border p-3 flex-grow"
                placeholder="Apply Coupon"
              />
              <Button className="border bg-black text-white p-3 rounded-none ml-4">
                Apply Coupon
              </Button>
              <Button className="border bg-transparent text-black p-3 rounded-none ml-4">
                Continue Shopping
              </Button>
            </div>
          </div>
          <div
            style={{ backgroundColor: "rgb(246,246,246)" }}
            className="w-full md:w-4/12 px-4 py-6 space-y-5"
          >
            <div className="flex flex-col mb-4">
              <div
                style={{ backgroundColor: "rgb(233,233,233)" }}
                className="bg-slate-500 w-full p-6"
              >
                <div>Cart totals</div>
              </div>
              <div className="space-y-8">
                <div className="flex justify-between">
                  <h3>Subtotal</h3>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <div>Shipping</div>
                  <div className="space-y-3">
                    <p>Free Shipping</p>
                    <p>Flat rate</p>
                    <p>Shipping to Bangladesh</p>
                    <p>Change Address</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Total</div>
                  <b className="text-5xl">${subtotal.toFixed(2)}</b>
                </div>
              </div>
              <NavLink to="/billing">
                <Button className="w-full border border-black rounded-none bg-transparent text-gray-900 font-bold hover:text-white mt-5 py-3">
                  CheckOut
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
