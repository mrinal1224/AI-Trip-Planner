import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          Plan Your Perfect Trip with AI
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Get personalized itineraries, destination suggestions, and travel tips powered by 
          artificial intelligence. Just tell us where you want to go and what you love.
        </p>
        <Link
          to="/dashboard"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Start Planning →
        </Link>
      </section>

      {/* Features Preview */}
      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="font-semibold text-slate-800 mb-2">AI Itinerary Generator</h3>
          <p className="text-slate-600 text-sm">
            Get day-by-day plans tailored to your interests and budget.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="text-3xl mb-4">💾</div>
          <h3 className="font-semibold text-slate-800 mb-2">Save Your Trips</h3>
          <p className="text-slate-600 text-sm">
            Store and manage all your travel plans in one place.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="text-3xl mb-4">❓</div>
          <h3 className="font-semibold text-slate-800 mb-2">Travel Q&A</h3>
          <p className="text-slate-600 text-sm">
            Ask anything about your destination—visa, tips, safety, and more.
          </p>
        </div>
      </section>
    </div>
  )
}
