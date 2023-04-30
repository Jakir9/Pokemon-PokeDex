import React, { useState } from "react";
import {
  Button,
  CardImage,
  CardWrapper,
  CardAbilitiesWrapper,
  CardHeightWeightWrapper,
  CardDetails,
  CardTypes,
} from "./styles.js";

function Card({ pokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <CardWrapper src={"../App/pokemon-icon.png"}>
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>

      <CardImage src={pokemon.sprites.front_default} alt={pokemon.name} />

      <Button onClick={handleClick}>
        {showDetails ? "hide details" : "view details"}
      </Button>

      {showDetails && (
        <CardDetails>
          <CardTypes>
            <h5>Types:</h5>

            {pokemon.types.map((type, index) => (
              <li key={index}>
                {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
              </li>
            ))}
          </CardTypes>

          <CardAbilitiesWrapper>
            <h5>Abilities:</h5>

            {pokemon.abilities.map((ability, index) => (
              <li key={index}>
                {ability.ability.name[0].toUpperCase() +
                  ability.ability.name.slice(1)}
              </li>
            ))}
          </CardAbilitiesWrapper>
          <br />

          <CardHeightWeightWrapper>
            <li>Height: {pokemon.height / 10} m</li>
            <li>Weight: {pokemon.weight} kg</li>
          </CardHeightWeightWrapper>
        </CardDetails>
      )}
    </CardWrapper>
  );
}

export default Card;
