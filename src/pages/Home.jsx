
import CardComponent from '../components/Card'
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { menuItemsState } from "../recoil/atoms";

const Home = () => {
    const [menuItems, setMenuItems] = useRecoilState(menuItemsState);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968"
        );
        const json = await response.json();
        setMenuItems(json.record); // Store the fetched data in Recoil
      };

      fetchData();
    }, [setMenuItems]);
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 px-6 py-8">
            {menuItems?.map((item) => {
              return <CardComponent key={item.id} menuItem={item} />;
            })}
      </div>
    </div>
  );
}

export default Home