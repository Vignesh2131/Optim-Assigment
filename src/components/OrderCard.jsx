
import { Card } from "flowbite-react";
import { useRecoilValue } from "recoil";
import { menuItemsState } from "../recoil/atoms";
const findItemQuantity = (allItems, menuItemId) => {
  // Find the item in allItemsState by its id
  const foundItem = allItems.find((item) => item.id === menuItemId);

  // Check if item exists in allItemsState
  if (foundItem) {
    return foundItem.available_quantity; // Return the available quantity
  } else {
    return null; // Item not found in allItemsState
  }
};

export function OrderCard({item}) {
    const menuItems = useRecoilValue(menuItemsState)
    const quant = findItemQuantity(menuItems,item.id)
  return (
    <Card className="max-w-sm" imgSrc={item.image_url} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      </p>
    </Card>
  );
}
