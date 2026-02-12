import { Link } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">My Trips</h2>
        <p className="text-slate-600 mb-8">
          Your trip planner dashboard — AI itinerary generator and saved trips coming soon.
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
