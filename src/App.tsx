import { useEffect, useState } from 'react';
import AppViewWrapper from './components/AppViewWrapper/AppViewWrapper';
import FoodView from './components/FoodView/FoodView';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import foodData from './data';

export interface Food {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

function App() {
  const [food, setfood] = useState(foodData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFood, setSelectedFood] = useState<[] | Food[]>([]);

  useEffect(() => {
    console.log(selectedCategory);

    if (selectedCategory === 'all') {
      setSelectedFood(food);
    } else {
      setSelectedFood(
        food.filter((item) => item.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  const callbacks = {
    selectCategory: (category: string) => {
      setSelectedCategory(category);
    },
  };

  return (
    <AppViewWrapper>
      <section>
        <Hero />
        <NavBar callbacks={callbacks} food={food} />
      </section>
      <main className="content-wrapper">
        {selectedFood.map((item) => (
          <FoodView key={item.id} {...item} />
        ))}
      </main>
    </AppViewWrapper>
  );
}

export default App;
