import { Code, Mail, Github, Linkedin } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">Portfolio</span>
          <ul className="flex gap-8 text-sm">
            <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
            <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="text-center max-w-2xl">
          <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-secondary flex items-center justify-center">
            <Code className="w-12 h-12 text-primary" />
          </div>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold mb-4 text-balance">Your Name</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            First-Year B.Tech CSE Student
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Passionate about coding and technology. Eager to learn and build innovative solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          <div className="bg-card border border-border rounded-xl p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a first-year B.Tech Computer Science and Engineering student with a strong passion for 
              programming and software development. Currently exploring various domains in computer science 
              to find my niche.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey in tech started with curiosity about how software works, and now I&apos;m committed 
              to building practical skills through consistent learning and hands-on projects.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-medium">B.Tech CSE (1st Year)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="font-medium">Full Stack Development</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">India</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">Open to Learn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "SQL"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "C"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-sm font-medium text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          {/* Featured Projects */}
          <h3 className="text-xl font-semibold mb-6 text-primary">Featured Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {/* Featured Project 1 */}
            <div className="bg-card border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <Code className="w-6 h-6 text-muted-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Coming Soon 🚀</h4>
              <p className="text-muted-foreground mb-5 leading-relaxed flex-1">
                Currently learning and building. Check back soon!
              </p>
            </div>

            {/* Featured Project 2 */}
            <div className="bg-card border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <Code className="w-6 h-6 text-muted-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Coming Soon 🚀</h4>
              <p className="text-muted-foreground mb-5 leading-relaxed flex-1">
                Currently learning and building. Check back soon!
              </p>
            </div>
          </div>

          {/* Other Projects */}
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Other Projects</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Other Project 1 */}
            <div className="bg-card/50 border border-dashed border-border rounded-lg p-5">
              <h4 className="font-medium mb-2">Coming Soon 🚀</h4>
              <p className="text-muted-foreground text-sm">
                Currently learning and building. Check back soon!
              </p>
            </div>

            {/* Other Project 2 */}
            <div className="bg-card/50 border border-dashed border-border rounded-lg p-5">
              <h4 className="font-medium mb-2">Coming Soon 🚀</h4>
              <p className="text-muted-foreground text-sm">
                Currently learning and building. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-card/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground mb-10 text-center">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a friendly chat about tech!
          </p>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="mt-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. Built with passion.
          </p>
        </div>
      </footer>
    </div>
  )
}
