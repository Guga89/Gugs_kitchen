import Navbar from "./components/Layout/Navbar";
import styles from "./App.module.css"
import Content from "./components/Layout/Content";
import CartContextProvider from "./contexts/cart-context";
import { useEffect } from "react/cjs/react.development";
import Spinner from "./components/UI/Spinner";
import useFetch from "./hooks/useFetch";

function App() {
  // const [meals, setMeals] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(() => {

  //   async function getFoods() {

  //     try {
  //       setIsLoading(true)
  //       // const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
  //       const response = await fetch('https://react-dummy-server-default-rtdb.firebaseio.com/meals.json');

  //       if (!response.ok) {
  //         throw new Error('Something went wrong! :(')
  //       }

  //       const meals = await response.json();


  //       // const data = await response.json();
  //       // const meals = data.meals.map(meal => {
  //       //   return {
  //       //     id: meal.idMeal,
  //       //     name: meal.strMeal,
  //       //     price: 10,
  //       //     img: meal.strMealThumb
  //       //   }
  //       // })
  //       setMeals(meals)

  //     } catch (error) {
  //       setError(error)
  //     }

  //     setIsLoading(false)
  //   }
  //   getFoods()
  // }, [])

  const { data: meals, isLoading, error, getData } = useFetch()
  useEffect(() => {
    getData({ url: 'https://react-dummy-server-default-rtdb.firebaseio.com/meals.json' })
  }, [getData])

  return (
    <div className={styles.container}>
      <CartContextProvider>
        <Navbar />
        {!isLoading && meals.length > 0 && <Content meals={meals} />}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && meals.length === 0 && !error && <p>No food to show .... Cook is on leave :(</p>}
        {isLoading && <Spinner />}
      </CartContextProvider>
    </div>
  );
}

export default App;
