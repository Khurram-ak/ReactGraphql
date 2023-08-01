import { gql } from "@apollo/client"


export const GET_CHARACTERS=gql`
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

export const GET_CHARACTER_BY_ID=gql`
query($id:ID!){
    character(id:$id){
            id
            name
            image
    }
}
`

export const GET_LOCATION_BY_NAME=gql`
query ($name:String!){
    characters(filter: {
      name: $name
    }) {
      results{
        location{
          name
        }
      } 
      }
    }
  
`




