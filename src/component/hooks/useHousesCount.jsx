import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useHousesCount() {
    const {  data: housescount = [] } = useQuery({
        queryKey: ['housescount'],

        queryFn: async () => {
          const res = await fetch('http://localhost:5000/housescount')
          return res.json()
        },
      })
  return [housescount]

}
