import { useRecoilValue } from "recoil";
import { allOrdersState } from "../recoil/atoms";
import { Card } from "flowbite-react";

const Order = () => {
  const allOrders = useRecoilValue(allOrdersState);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {allOrders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        allOrders.map((order, index) => (
          <Card key={index} className="mb-4">
            <h5 className="text-xl font-bold">
              Order for Table: {order.tableNumber}
            </h5>
            <p>Date: {order.date}</p>
            <p>Time: {order.time}</p>
            {order.contactNumber && (
              <p>Contact Number: {order.contactNumber}</p>
            )}
            <h6 className="font-semibold mt-2">Items:</h6>
            <ul className="list-disc list-inside">
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} (Quantity: {item.quantity})
                </li>
              ))}
            </ul>
          </Card>
        ))
      )}
    </div>
  );
};

export default Order;
