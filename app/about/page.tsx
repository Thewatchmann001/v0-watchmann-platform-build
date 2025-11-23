import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export const metadata = {
  title: "About - Watchmann",
  description: "Learn about Watchmann and our mission to deliver cutting-edge tech, AI, and design solutions globally.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">About Watchmann</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto text-balance">
            Building the future of technology with cutting-edge AI, innovative design, and comprehensive solutions for
            agencies and businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              At Watchmann, we are committed to empowering agencies and businesses with innovative technology solutions
              that drive growth and efficiency. Our platform combines artificial intelligence, comprehensive learning
              resources, and a robust marketplace to provide everything you need to succeed in the digital age.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              We believe in democratizing access to cutting-edge technology, making enterprise-grade tools accessible to
              organizations of all sizes. Through our AI Labs, Academy, and Marketplace, we're building an ecosystem
              where innovation thrives and businesses transform.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white">Founder</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                {/* Founder Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src="/professional-headshot-of-joseph-edward-musa-amah-f.jpg"
                      alt="Joseph Edward Musa Amah"
                      width={160}
                      height={160}
                      className="rounded-full object-cover border-4 border-blue-500/20"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/20 ring-offset-4 ring-offset-slate-900"></div>
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Joseph Edward Musa Amah</h3>
                  <p className="text-blue-400 font-medium mb-4">Founder & CEO</p>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Joseph Edward Musa Amah, a Mechanical Engineer, software and AI enthusiast, founded Watchmann.com a team of elite developers, data scientist, software, AI, Mechanical and design engineers to deliver
                    cutting-edge tech, AI, and design solutions globally. With a passion for innovation and a vision for
                    democratizing technology, he leads Watchmann in building transformative solutions for businesses
                    worldwide.
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors text-sm"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="mailto:josephemsamah@gmail.com"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors text-sm"
                    >
                      <Mail size={16} />
                      <span>Contact</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-slate-400">
                  Constantly pushing boundaries to deliver cutting-edge solutions that drive progress.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-cyan-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-slate-400">
                  Committed to delivering the highest quality in everything we create and every service we provide.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accessibility</h3>
                <p className="text-slate-400">
                  Making enterprise-grade technology accessible to businesses of all sizes worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
