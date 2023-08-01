import React from 'react'
import { GET_CHARACTER_BY_ID } from '../queries/GetQueries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export default function Character() {

    let {id}=useParams()

      const { error, loading, data } = useQuery(GET_CHARACTER_BY_ID,
        {
            variables:{
                id
            }
        }
        );

      console.log(data)

    return (
    <div>
      
    </div>
  )
}
