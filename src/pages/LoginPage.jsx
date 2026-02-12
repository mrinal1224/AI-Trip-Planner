import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Log In</h2>
        <p className="text-slate-600 mb-6">
          Login page — Firebase Auth integration coming in Phase 2.
        </p>
        <Link to="/" className="text-teal-500 hover:text-teal-600 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
