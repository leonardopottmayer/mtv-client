import React, { useState, useEffect, useRef } from "react";

import styles from "./HomePage.module.css";

import api from "../../services/api";
import pottmayerDevApi from "../../services/pottmayerDevApi";

import PhraseComp from "../../components/Phrase/PhraseComp";
import Credits from "../../components/Credits/Credits";

const HomePage = () => {
  const [phrase, setPhrase] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await api.get("phrase/randomPhrase");

      const projectAccessPostResponse = await pottmayerDevApi.post(
        "/projectsAccess",
        {
          projectName: "MTV",
        }
      );

      if (response.data.result) {
        setPhrase(response.data.result);
      }
    };

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
