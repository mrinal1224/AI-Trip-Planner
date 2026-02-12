import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          ✈️ AI Trip Planner
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
          <Link to="/dashboard" className="hover:text-teal-400 transition-colors">Dashboard</Link>
          <Link to="/login" className="hover:text-teal-400 transition-colors">Login</Link>
          <Link to="/signup" className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg font-medium transition-colors">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}
