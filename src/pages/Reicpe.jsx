import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Reicpe() {
  const [details, setDetails] = useState([]);
  const [activeTap, setActiveTap] = useState("Instructions");
  const params = useParams();

  const fetchDetails = () => {
    fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((details) => setDetails(details))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} loading="lazy" />
      </div>
      <Info>
        <Button
          className={activeTap === "Instructions" ? "active" : ""}
          onClick={() => setActiveTap("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTap === "Ingredients" ? "active" : ""}
          onClick={() => setActiveTap("Ingredients")}
        >
          Ingredients
        </Button>
        {activeTap === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTap === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.section`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    margin-right: 0.5rem;
  }
`;

const Info = styled.div`
  margin-left: 10rem;
  @media screen and (max-width: 1280px) {
    margin-inline: auto;
  }
`;
