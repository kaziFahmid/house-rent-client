import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useHouses() {
    const { refetch, data: houses = [] } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/houses')
          return res.json()
        },
      })
  return [houses]
}
