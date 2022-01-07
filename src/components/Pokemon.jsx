import React, { useState } from "react";
import "./Pokemon.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Pokemon = (props) => {
  const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`;
  const colors = {
    fire: "darkorange",
    grass: "green",
    electric: "red",
    water: "darkcyan",
    ground: "brown",
    rock: "gray",
    fairy: "purple",
    poison: "lightgreen",
    bug: "darkgreen",
    dragon: "#97b3e6",
    psychic: "yellow",
    flying: "#F5F5F5",
    fighting: "darkgray",
    normal: "slategray",
  };
  //   create a function where the color of the pokemon is based on the type

  const getColor = (type) => {
    switch (type) {
      case "fire":
        return colors.fire;
      case "grass":
        return colors.grass;
      case "electric":
        return colors.electric;
      case "water":
        return colors.water;
      case "ground":
        return colors.ground;
      case "rock":
        return colors.rock;
      case "fairy":
        return colors.fairy;
      case "poison":
        return colors.poison;
      case "bug":
        return colors.bug;
      case "dragon":
        return colors.dragon;
      case "psychic":
        return colors.psychic;
      case "flying":
        return colors.flying;
      case "fighting":
        return colors.fighting;
      case "normal":
        return colors.normal;
      default:
        return colors.normal;
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
            <div>
              <img src={image} alt="" />
            </div>
            <div style={{ marginLeft: "6rem" }}>
              <h1 style={{ paddingBottom: "2rem" }}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
              </h1>
              <div style={{ width: "100%" }}>
                <p
                  style={{
                    paddingTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {props.pokemon.stats[0].stat.name}
                </p>
                <meter
                  value={props.pokemon.stats[0].base_stat}
                  min="0"
                  max="200"
                  className="meter hp"
                >
                  2 out of 10
                </meter>
                {props.pokemon.stats[0].base_stat}
                <br></br>
                <p
                  style={{
                    paddingTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {props.pokemon.stats[1].stat.name}
                </p>
                <meter
                  value={props.pokemon.stats[1].base_stat}
                  min="0"
                  max="200"
                  className="meter attack"
                >
                  2 out of 10
                </meter>
                {props.pokemon.stats[1].base_stat}
                <br></br>
                <p
                  style={{
                    paddingTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {props.pokemon.stats[2].stat.name}
                </p>
                <meter
                  value={props.pokemon.stats[2].base_stat}
                  min="0"
                  max="200"
                  className="meter defense"
                >
                  2 out of 10
                </meter>{" "}
                {props.pokemon.stats[2].base_stat}
                <br></br>
                <p
                  style={{
                    paddingTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {props.pokemon.stats[3].stat.name}
                </p>
                <meter
                  value={props.pokemon.stats[3].base_stat}
                  min="0"
                  max="200"
                  className="meter attack"
                >
                  2 out of 10
                </meter>
                {props.pokemon.stats[3].base_stat}
                <br></br>
                <p
                  style={{
                    paddingTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {props.pokemon.stats[4].stat.name}
                </p>
                <meter
                  value={props.pokemon.stats[4].base_stat}
                  min="0"
                  max="200"
                  className="meter defense"
                >
                  2 out of 10
                </meter>
                {props.pokemon.stats[4].base_stat}
                <br></br>
                <p
                  style={{
                    paddingTop: "1rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {props.pokemon.stats[5].stat.name}
                </p>
                <meter
                  value={props.pokemon.stats[5].base_stat}
                  min="0"
                  max="200"
                  className="meter hp"
                >
                  2 out of 10
                </meter>
                {props.pokemon.stats[5].base_stat}
                <br></br>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div
        className="card"
        style={{ backgroundColor: getColor(props.poketype) }}
        onClick={handleOpen}
      >
        <div className="image-part">
          {/* id */}
          <img
            src={image ? image : props.img}
            alt=""
            style={{ width: "90%" }}
          />
        </div>
        <div>
          {/* Name */}
          <div className="pokename">
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </div>
          {/* Type */}
          <div className="poketype">{props.poketype}</div>
          <p
            style={{
              color: "darkgray",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginTop: "100px",
            }}
          >
            #{props.id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
