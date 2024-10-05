import { Card, Button } from "flowbite-react"
import { useRecoilState } from "recoil";
import { allItemsState,menuItemsState } from "../recoil/atoms";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const CardComponent = ({ menuItem}) => {
   const [allItems, setAllItems] = useRecoilState(allItemsState); // Recoil state for allItems
   const [menuItems, setMenuItems] = useRecoilState(menuItemsState); // Recoil state for menuItems

   const handleAddItem = () => {
     if (menuItem.available_quantity > 0) {
       // Find if the item already exists in allItemsState
       const itemExists = allItems.find((item) => item.id === menuItem.id);

       if (itemExists) {
         // If the item exists, update its quantity in allItems
         const updatedAllItems = allItems.map((item) =>
           item.id === menuItem.id
             ? { ...item, quantity: item.quantity + 1 } // Increment quantity
             : item
         );
         setAllItems(updatedAllItems); // Update Recoil state with the updated allItems
       } else {
         // If the item doesn't exist, add it to allItems with an initial quantity of 1
         setAllItems([...allItems, { ...menuItem, quantity: 1 }]);
       }

       // Decrement the available_quantity of the current menu item in menuItemsState
       const updatedMenuItems = menuItems.map((item) =>
         item.id === menuItem.id
           ? { ...item, available_quantity: item.available_quantity - 1 } // Decrease available_quantity
           : item
       );
       setMenuItems(updatedMenuItems); // Update Recoil state with the updated menuItems
     } else if (menuItem.available_quantity === 0) {
       // Alert when no available quantity is left
       alert(`${menuItem.name} is not available`);
     }
   };

  return (
    <Card
      className="max-w-sm h-auto"
      imgAlt={menuItem.name}
      imgSrc={menuItem.image_url}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {menuItem.name}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center justify-between">
        <div className=" flex gap-2 items-center">
          <span className="bg-orange-500 p-1 font-semibold text-sm rounded-md">
            {menuItem.category}
          </span>
          <span className="bg-green-400 p-1 text-sm rounded-md">
            {menuItem.sub_category}
          </span>
          <span className="bg-teal-300 p-1 text-sm rounded-md">
            {menuItem.available_quantity != 0
              ? menuItem.available_quantity
              : "NA"}
          </span>
        </div>

        <span>
          {menuItem.type == "veg" ? (
            <img src="../../public/veg.png" className="w-6" alt="" />
          ) : (
            <img src="../../public/non_veg.png" className="w-6" alt="" />
          )}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {menuItem.price}
        </span>

          <div
            className="rounded-lg bg-cyan-700 px-1 py-2.5 font-medium text-white"
              >
                  <div className="flex items-center justify-between gap-2 px-2">
                      <span onClick={handleAddItem}  className="text-3xl font-extrabold"><CiCirclePlus/></span>
                      <span>{menuItem.available_quantity}</span>
                  </div>
          </div>
      </div>
    </Card>
  );
}

export default CardComponent