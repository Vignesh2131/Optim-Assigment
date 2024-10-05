
import { useRecoilValue,useRecoilState } from "recoil"
import { allItemsState,allOrdersState } from "../recoil/atoms"
import { OrderCard } from "../components/OrderCard";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Datepicker } from "flowbite-react";

const FinalOrder = () => {
     const allItems = useRecoilValue(allItemsState);
     const [allOrders, setAllOrders] = useRecoilState(allOrdersState);
     const [value, onChange] = useState(new Date());
     const [tableNumber, setTableNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Check if table number already exists in allOrders
      const existingOrder = allOrders.find(
        (order) => order.tableNumber === tableNumber
      );

      if (existingOrder) {
        alert(`An order already exists for Table Number ${tableNumber}.`);
        return;
      }

      // Create the order object
      const newOrder = {
        items: allItems,
        tableNumber,
        date: value.toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        contactNumber,
      };

      // Add new order to allOrdersState
      setAllOrders([...allOrders, newOrder]);

      // Optional: Clear form inputs after submission
      setTableNumber("");
      setContactNumber("");
      onChange(new Date()); // Reset date to today or any default
    };

  return (
    <div className="grid grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold">Your Final Order</h2>
        {allItems.map((item) => {
          return <OrderCard key={item.id} item={item} allItems={allItems} />;
        })}
      </div>

      <div className="flex justify-center">
        <form className=" max-w-lg w-screen flex-col gap-4">
          <div>
            <div className="mb-4 block">
              <Label htmlFor="Table" value="Table Number" />
            </div>
            <TextInput
              id="table"
              type="text"
              placeholder="Enter your table number"
                          required
                          onChange={(e)=>setTableNumber(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-4 block">
              <Label htmlFor="contact" value="Contact number" />
            </div>
            <TextInput
              id="contact"
              type="text"
              placeholder="Optional"
              required
            />
          </div>
          <div>
            <div className="mb-4 block">
              <Label htmlFor="date" value="Pick the date" />
            </div>
            <Datepicker onChange={onChange} value={value} />
          </div>
          <Button onClick={handleSubmit} className="mt-5" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FinalOrder