import React, { useState, useEffect } from "react";
import logo from "../src/assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any;
}
const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);

  useEffect(() => {
    document.title = `点击了${count}次`;
  }, [count]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setRobotGallery(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <ShoppingCart />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <div className={styles.robotList}>
        {robotGallery.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
};

export default App;
