import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { GET_LOCATION_BY_NAME } from "../queries/GetQueries";
import { SIGN_IN_USER } from "../mutations/mutations";

export default function CharacterSearch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let [searchBtn, { data, error, loading }] = useLazyQuery(
    GET_LOCATION_BY_NAME
    //     {
    //     variables:{
    //         name:name
    //     }
    // }
  );

  const SearchClick = () => {
    searchBtn({
      variables: {
        name,
      },
    });
  };

  let [signIn, { data2, error2, loading2 }] = useMutation(SIGN_IN_USER);

  const SignInUser = () => {
    signIn({
      variables: {
        email,
        password,
      },
    });
  };

  console.log(data, "locations");

  return <>
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name=""
        id=""
      />
      <button onClick={SearchClick}>Search</button>
    </div>
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        name=""
        id=""
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        name=""
        id=""
      />
      <button onClick={SignInUser}>SignIn</button>
    </div>
  </>
}
