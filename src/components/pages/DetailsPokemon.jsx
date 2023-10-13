import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPokemon from "../CardPokemon/CardPokemon";

function DetailsPokemon() {
    const [dataPokemon, setDataPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    let params = useParams();

    useEffect(() => {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setDataPokemon(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, [params.id]);
    console.log(dataPokemon)
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {!loading && dataPokemon ? (
                <>
                <CardPokemon  pokemon={dataPokemon}></CardPokemon>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default DetailsPokemon;