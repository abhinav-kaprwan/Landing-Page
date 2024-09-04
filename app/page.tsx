import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, UserCheck, TrendingUp, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="sr-only">Smart Classroom</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Smart Classroom
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enhance your learning experience with our AI-powered classroom software. Engage, learn, and grow with cutting-edge technology.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <FeatureCard
                icon={<Calendar className="h-12 w-12 text-primary" />}
                title="Online Classes"
                description="Attend classes from anywhere, anytime. Interactive and engaging online learning experience."
              />
              <FeatureCard
                icon={<UserCheck className="h-12 w-12 text-primary" />}
                title="Face Recognition Attendance"
                description="Automated attendance system using advanced face recognition technology."
              />
              <FeatureCard
                icon={<TrendingUp className="h-12 w-12 text-primary" />}
                title="Learning Graph"
                description="Visualize your learning progress with personalized learning graphs and analytics."
              />
              <FeatureCard
                icon={<MessageCircle className="h-12 w-12 text-primary" />}
                title="AI Chatbot"
                description="Get instant answers to your questions with our AI-powered chatbot using teacher-provided resources."
              />
              <FeatureCard
                icon={<FileText className="h-12 w-12 text-primary" />}
                title="Smart Scheduling"
                description="Submit PDF schedules and let AI generate your calendar automatically."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Learning?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join Smart Classroom today and experience the future of education. Empower your learning journey with AI-driven tools and interactive features.
                </p>
              </div>
              <Button className="w-full sm:w-auto" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Smart Classroom. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-3 text-center p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-white dark:hover:bg-gray-700">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}