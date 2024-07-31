
import { useState } from "react";
import { useSelector } from "react-redux";


const OrderConfirmation = () => {
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

  const products = useSelector((state: RootState) => state.cart.items);
  const [quantities] = useState<number[]>(
    // const [quantities, setQuantities] = useState<number[]>(

    products.map((product) => product.quantity || 1) // Default to 1 if quantity is not defined
  );

  const subtotal = products.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  );
  return (
    <div className="container">
      <div
        className="thank-you text-2xl
      border-4 border-black border-dashed  p-5 text-center
      
      "
      >
        Thank you. Your order has been received.
      </div>
      <div className="flex flex-wrap justify-between mt-5 text-gray-500">
        <div>Order number: 30854</div>
        <div>Date: July 17, 2024</div>
        <div>Email: jimakiti@mailinator.com</div>
        <div>Total: ${subtotal}</div>
        <div>Payment method: Check payments</div>
      </div>

      <div className="order-details ">
        <div className="order-details-left">
          <h3 className="text-2xl mt-5">Order details</h3>

          <table className="mt-16">
            <thead>
              <tr className="">
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <td>
                    {" "}
                    <div className="px-6  flex items-center py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="">
                        <div className="ms-5">
                          {product.title} x{" "}
                          <b className="text-gray-500">{product.quantity}</b>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-6ms-5 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${(product.price * quantities[index]).toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}

              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$1,108.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap  mt-16">
        <div className=" lg:w-[400px] border-dashed border-4 p-5 space-y-2">
          <h3>Billing address</h3>
          <p>Chava Torres</p>
          <p>Mckay and Watts Inc</p>
          <p>63 North Milton Extension</p>
          <p>Aperiam proident no</p>
          <p>Blanditiis quia qui</p>
          <p>Atlántico Sur</p>
          <p>42305</p>
          <p>Nicaragua</p>
          <p>+1 (391) 919-2887</p>
          <p>jimakiti@mailinator.com</p>
        </div>

        <div className=" lg:w-[400px]  border-dashed border-4 p-5 space-y-2">
          <h3>Shipping address</h3>
          <p>Chava Torres</p>
          <p>Mckay and Watts Inc</p>
          <p>63 North Milton Extension</p>
          <p>Aperiam proident no</p>
          <p>Blanditiis quia qui</p>
          <p>Atlántico Sur</p>
          <p>42305</p>
          <p>Nicaragua</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
