import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useHouses() {
    const { refetch, data: houses = [] } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
          const res = await fetch('https://house-rent-server-two.vercel.app/houses')
          return res.json()
        },
      })
  return [houses]
}
