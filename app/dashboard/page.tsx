import React from 'react'
import { auth } from '@/auth'

export default async function Dashboard() {
  const session = await auth()
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        {JSON.stringify(session)}
      </p>
      </div>
  )
}
