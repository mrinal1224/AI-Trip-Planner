import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">My Trips</h2>
        <p className="text-slate-600 mb-8">
          Welcome back, {user?.email}. Your trip planner dashboard — AI itinerary generator and saved trips coming in Phase 3.
        </p>
        <Link
          to="/"
          className="text-teal-500 hover:text-teal-600 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
