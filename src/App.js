import Navbar from "./components/Layout/Navbar";
import styles from "./App.module.css"
import Content from "./components/Layout/Content";
import CartContextProvider from "./contexts/cart-context";
import { useEffect } from "react/cjs/react.development";
import Spinner from "./components/UI/Spinner";
import useFetch from "./hooks/useFetch";
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/pages/Home";
import TakeAways from "./components/pages/TakeAways";
import Account from "./components/pages/MyAccount";

function App() {

  const { data: meals, isLoading, error, getData } = useFetch()

  useEffect(() => {
    getData({ url: 'https://react-dummy-server-default-rtdb.firebaseio.com/meals.json' })
  }, [getData])

  return (
    <div className={styles.container}>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/menu">
            {!isLoading && meals.length > 0 && <Content meals={meals} />}
            {!isLoading && error && <p>{error.message}</p>}
            {!isLoading && meals.length === 0 && !error && <p>No food to show .... Cook is on leave :(</p>}
            {isLoading && <Spinner />}
          </Route>
          <Route path="/take-aways">
            <TakeAways />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*" >
            <Redirect to="/home" />
          </Route>
        </Switch>
      </CartContextProvider>
    </div>
  );
}

export default App;
