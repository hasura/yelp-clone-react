import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { List, ListItemWithLink } from "./shared/List";
import { Badge } from "./shared/Badge";

const PLANETS = gql`
  {
    planets {
      id
      name
      cuisine
    }
  }
`;

const Planets = ({ newPlanets }) => {
  const { loading, error, data } = useQuery(PLANETS);

  const renderPlanets = (planets) => {
    return planets.map(({ id, name, cuisine }) => (
      <ListItemWithLink key={id}>
        <Link to={`/planet/${id}`}>
          {name} <Badge>{cuisine}</Badge>
        </Link>
      </ListItemWithLink>
    ));
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return <List>{renderPlanets(newPlanets || data.planets)}</List>;
};

export default Planets;
