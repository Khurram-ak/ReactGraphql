import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTERS } from "../queries/GetQueries";
import { useCharacter } from "../queryHooks/useCharacter";
import { useNavigate } from "react-router-dom";

export default function CharactersList() {

    //   const { error, loading, data } = useQuery(GET_CHARACTERS);
      const { error, loading, data } = useCharacter()

    const navigate=useNavigate()

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
      }}
    >
        
      <h2>{loading && "SPINNER"}</h2>
      <button onClick={()=>navigate('/characterSearch')}>Search for character</button>
       {
        data?.characters?.results.map((item)=>{
            return <><div onClick={()=>navigate(`/${item.id}`)}>
            <img src={item.image} />
            <h2>{item.name}</h2>
            </div>
            </>
        })
        } 
    </div>
  );
}
