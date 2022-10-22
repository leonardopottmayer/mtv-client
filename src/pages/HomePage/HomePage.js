import React, { useState, useEffect, useRef } from "react";

import styles from "./HomePage.module.css";

import api from "../../services/api";
import pottmayerDevApi from "../../services/pottmayerDevApi";

import PhraseComp from "../../components/Phrase/PhraseComp";
import Credits from "../../components/Credits/Credits";

const HomePage = () => {
  const [phrase, setPhrase] = useState(null);

  const fetchApi = async () => {
    const response = await api.get("phrase/randomPhrase");

    const mtvProjectsAccessVariable = localStorage.getItem("@mtv:projectsAccessVariable");

    if (mtvProjectsAccessVariable === "0"){
      const projectAccessPostResponse = await pottmayerDevApi.post("/projectsAccess", {
        projectName: "MTV"
      });

      localStorage.setItem("@mtv:projectsAccessVariable", "1");
    }

    if (response.data.result) {
      setPhrase(response.data.result);
    }
  };

  useEffect(() => {
    if(performance.navigation.type === 1) {
      localStorage.setItem("@mtv:projectsAccessVariable", "0");
    }

    fetchApi();
  }, []);

  return (
    <div className={styles.main}>
      {phrase && <PhraseComp phrase={phrase} />}
      <Credits />
    </div>
  );
};

export default HomePage;
