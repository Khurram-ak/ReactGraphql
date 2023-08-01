import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS=gql`
query{
    characters{
        results{
            id
            name
            image
        }
    }
}
`

export const useCharacter=()=>{
    let {error,data,loading}=useQuery(GET_CHARACTERS)
    return {error,data,loading}
}



