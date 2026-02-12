export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} AI Trip Planner. Built for teaching purposes.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
