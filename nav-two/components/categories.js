import { Center, ScrollView, Spinner } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import CategoryButton from "./category-button";

const Categories = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const categoryButtonHandler = (index) => {
    setActiveCategory(index);
    onChange(categories[index].path);
  };

  const getCategories = () => {
    
    const jakpostCategories = [
      { name: "Indonesia", path: "indonesia" },
      { name: "Opinion", path: "opinion" },
      { name: "Asia", path: "asia" },
      { name: "World", path: "world" },
      { name: "Business", path: "business" },
      { name: "Life", path: "life" },
      { name: "Youth", path: "youth" },
      { name: "Travel", path: "travel" }
    ];
    
    setCategories(jakpostCategories);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner size={"large"} color={"$white"} />
        </Center>
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            return (
              <CategoryButton
                title={category.name}
                isFirst={index == 0 ? true : false}
                isActive={index == activeCategory ? true : false}
                onPress={() => categoryButtonHandler(index)}
                key={index}
              />
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

export default Categories;


