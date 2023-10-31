"use client";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import styles from "./page.module.css";
import { Dna } from "react-loader-spinner";

export default function Home() {
  const [responseData, setResponseData] = useState<any[]>([]); // Explicitly specify the type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        if (response.ok) {
          const data = await response.json();
          setResponseData(data.data); // Assuming data is an array of items
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <main className={styles.main}>
      {responseData.length > 0 ? (
        responseData.map((item) => (
          <Card
          key={item.id}
            apiData={item}
          />
        ))
      ) : (
        <div className={styles.loader}>
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
          />
        </div>
      )}
    </main>
    </>
  );
}
