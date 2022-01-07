import { useEffect, useState } from "react";
import "./Main.css";
import Pokemon from "./Pokemon";

const Main = () => {
  // fetch pokemons from pokeapi
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const pokemons_number = 20;
  const all_pokemons_number = 807;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const searchForPokemon = (e) => {
    setSearch(e.target.value);
    // filter pokemons on the basis of search value
    const filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPokemons(filteredPokemons);
  };

  const filterPokemons = (e) => {
    setFilter(e.target.value);
    // if filter is empty, set all pokemons
    if (e.target.value === "") {
      setFilter("");
      getPokemon();
    } else {
      // filter pokemons on the basis of filter value
      const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.types[0].type.name.includes(e.target.value.toLowerCase())
      );
      setPokemons(filteredPokemons);
    }
  };

  const getPokemon = async (id) => {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const pokemon = await result.json();
      setPokemons((pokemons) => [...pokemons, pokemon]);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllPokemon = async (id) => {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const pokemon = await result.json();
      setAllPokemons((pokemons) => [...pokemons, pokemon]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
      }
    };
    const fetchAllData = async () => {
      for (let y = 1; y <= all_pokemons_number; y++) {
        await getAllPokemon(y);
      }
    };
    fetchData();
    fetchAllData();
  }, []);

  console.log(pokemons);

  return (
    <div className="main">
      <div className="main__search">
        {/* Filter and Search bar */}
        <div className="searchbar">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search for a Pokemon"
            value={search}
            onChange={(e) => searchForPokemon(e)}
          />
        </div>
        <div className="searchbar">
          <i className="fa fa-filter"></i>
          <input
            list="types"
            placeholder="Filter by type"
            value={filter}
            onChange={(e) => filterPokemons(e)}
          />
          <datalist id="types">
            <option value="Grass" />
            <option value="Fire" />
            <option value="Water" />
            <option value="Bug" />
            <option value="Normal" />
            <option value="Electric" />
            <option value="Psychic" />
            <option value="Poison" />
            <option value="Rock" />
            <option value="Ground" />
            <option value="Fighting" />
            <option value="Dragon" />
            <option value="Fairy" />
          </datalist>
        </div>
      </div>
      <div className="pokelist">
        {/* Pokemon list */}
        {pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            pokemon={pokemon}
            poketype={pokemon.types[0].type.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
