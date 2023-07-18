import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

export default function useBookings() {
    const{currentUser}=useContext(AuthContext)
    const { refetch, data: housebookings = [] } = useQuery({
        queryKey: ['housebookings'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/housebookings?email=${currentUser.email}`)
          return res.json()
        },
      })
  return [refetch,housebookings]
}
