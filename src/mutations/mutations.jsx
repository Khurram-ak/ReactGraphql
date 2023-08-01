import { gql } from "@apollo/client";

export const SIGN_IN_USER=gql`
mutation ($email:String!,$password:String!){
    signIn(
      email: $email,
      password:$password
    ) {
      results{
        token
        user{
            id
            name
        }   
      } 
      }
    }
`