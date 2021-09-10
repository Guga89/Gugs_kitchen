import Navbar from "./components/Layout/Navbar";
import styles from "./App.module.css"
import Content from "./components/Layout/Content";
import CartContextProvider from "./contexts/cart-context";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const meals = [{ id: uuidv4(), name: "Burger", price: 15, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger2", price: 16, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger4", price: 16, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger5", price: 16, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger6", price: 16, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger7", price: 16, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger8", price: 16, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger11", price: 18, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" },
  { id: uuidv4(), name: "Burger3", price: 17, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1804&q=80" }]


  return (
    <div className={styles.container}>
      <CartContextProvider>
        <Navbar />
        <Content meals={meals} />
      </CartContextProvider>
    </div>
  );
}

export default App;
