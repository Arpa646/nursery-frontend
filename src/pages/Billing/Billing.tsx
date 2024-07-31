import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface RootState {
  cart: {
    items: Product[];
  };
}

export default function Billing() {
  const products = useSelector((state: RootState) => state.cart.items);

  // Initialize quantities state based on the products in the cart
  const [quantities] = useState<number[]>(
    // const [quantities, setQuantities] = useState<number[]>(

    products.map((product) => product.quantity || 1) // Default to 1 if quantity is not defined
  );

  const subtotal = products.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  );

  return (
    <div className="">
      <div className="flex flex-col items-center p-4 text-black min-h-screen">
        <div className="max-w-6xl w-full rounded-lg p-6 animate__animated animate__fadeIn">
          <div className="flex flex-col  gap-5 md:flex-row">
            <div className="md:w-8/12   scroll-m-5">
              <div className="max-w-3xl mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      defaultValue="Chava"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      defaultValue="Torres"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      name="company-name"
                      defaultValue="Mckay and Watts Inc"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country / Region *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      defaultValue="Nicaragua"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address *
                    </label>
                    <input
                      type="text"
                      id="street-address"
                      name="street-address"
                      defaultValue="63 North Milton Extension"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apartment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apartment, suite, unit, etc.
                    </label>
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      defaultValue="Aperiam proident no"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="town-city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Town / City *
                    </label>
                    <input
                      type="text"
                      id="town-city"
                      name="town-city"
                      defaultValue="Blanditiis quia qui"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Department *
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      defaultValue="Atlántico Sur"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postcode / ZIP *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      defaultValue="42305"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      defaultValue="+1 (391) 919-2887"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue="jimakiti@mailinator.com"
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="order-notes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Order notes (optional)
                    </label>
                    <textarea
                      id="order-notes"
                      name="order-notes"
                      rows={3} // Corrected type
                      className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="border border-black h-full space-y-5 md:w-3/12 px-4">
              <div className="flex mb-4 p-4 flex-col md:flex-row">
                <div className="w-full">
                  <div className="p-6">Products</div>
                  <div className="space-y-8">
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className="space-y-4 flex items-center"
                      >
                        <div className="px-6 flex items-center py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div>
                            <img
                              style={{ backgroundColor: "rgb(238,238,238)" }}
                              className="w-20"
                              src={product.imageUrl}
                              alt={product.title}
                            />
                          </div>
                          <div className="ml-5">
                            <div>{product.title}</div>
                            <b>QYT: {product.quantity}</b>
                          </div>
                        </div>
                        <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${(product.price * quantities[index]).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr className="my-4" />
                  <div className="w-full flex justify-between">
                    <div>subTotal</div>
                    <div>${subtotal.toFixed(2)}</div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div>Shipping</div>
                    <div>Flat rate: $0.00</div>
                  </div>
                  <hr className="border-gray-300 my-4" />
                  <div className="w-full flex justify-between">
                    <div>Total</div>
                    <div>${subtotal.toFixed(2)}</div>
                  </div>
                  <hr className="border-gray-300 my-4" />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="cash-on-delivery"
                  type="radio"
                  value="cash-on-delivery"
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="cash-on-delivery"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Cash on Delivery
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="bkash"
                  type="radio"
                  value="bkash"
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="bkash"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  bKash
                </label>
              </div>

              <Link to="/confirm">
                <div className="p-4 flex justify-center">
                  <Button className="w-full md:w-[300px]">Place Order</Button>
                </div>
              </Link>

              <Link to="/cart">
                <div className="p-4 flex justify-center">
                  <Button variant="outline" className="w-full md:w-[300px]">
                    RETURN TO CART
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
