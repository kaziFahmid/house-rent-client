import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useHouseOwner() {
    const {  data: allusers = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/allusers')
          return res.json()
        },
      })
  return [allusers]
}
