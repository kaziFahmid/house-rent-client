import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useHouseOwner() {
    const {  data: allusers = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
          const res = await fetch('https://house-rent-server-two.vercel.app/allusers')
          return res.json()
        },
      })
  return [allusers]
}
