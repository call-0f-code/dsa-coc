import { Code, Users, Trophy, ExternalLink } from 'lucide-react'
import { FeatureCard } from './feature-card'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <Code size={28} className="text-blue-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">CALL OF CODE</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Master DSA with CALL OF CODE
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto font-light">
          Elevate your problem-solving skills, track your progress, and compete with peers in our exclusive coding club platform
        </p>
        <div className="inline-block">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-semibold py-4 px-8 rounded-full animate-pulse shadow-lg">
            Coming Soon
          </span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Why Choose CALL OF CODE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Code size={48} />}
              title="Curated DSA Problems"
              description="Handpicked challenges to sharpen your algorithmic skills"
            />
            <FeatureCard 
              icon={<Users size={48} />}
              title="Peer Tracking"
              description="Monitor your progress and compete with fellow coders"
            />
            <FeatureCard 
              icon={<Trophy size={48} />}
              title="Club Leaderboard"
              description="Climb the ranks and showcase your DSA mastery"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Ready to Level Up Your DSA Skills?
        </h2>
        <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto font-light">
          Join CALL OF CODE and transform into a problem-solving maestro. Be the first to know when we launch!
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg">
          <span className="flex items-center">
            Get Notified at Launch
            <ExternalLink size={20} className="ml-2" />
          </span>
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-t from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 CALL OF CODE. All rights reserved.</p>
          <p className="mt-2">Platform currently under development. Stay tuned for our epic launch!</p>
        </div>
      </footer>
    </div>
  )
}

