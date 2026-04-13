import { Code, Mail, Github, Linkedin, ExternalLink } from "lucide-react"

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
                {["C", "C++", "Python", "JavaScript"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Web Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "React (Learning)"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "VS Code", "Linux", "MySQL"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                {["Data Structures", "Algorithms", "Web Development"].map((skill) => (
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
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Calculator App</h3>
                <div className="flex gap-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                A simple calculator built with HTML, CSS, and JavaScript with basic arithmetic operations.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-secondary rounded">HTML</span>
                <span className="text-xs px-2 py-1 bg-secondary rounded">CSS</span>
                <span className="text-xs px-2 py-1 bg-secondary rounded">JavaScript</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">To-Do List</h3>
                <div className="flex gap-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                A task management app to add, edit, and delete tasks with local storage persistence.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-secondary rounded">HTML</span>
                <span className="text-xs px-2 py-1 bg-secondary rounded">CSS</span>
                <span className="text-xs px-2 py-1 bg-secondary rounded">JavaScript</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Number Guessing Game</h3>
                <div className="flex gap-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                A console-based number guessing game built in Python with different difficulty levels.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-secondary rounded">Python</span>
              </div>
            </div>

            {/* Project 4 - Coming Soon */}
            <div className="bg-card/50 border border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground text-sm mb-2">More projects coming soon...</p>
              <p className="text-xs text-muted-foreground">Currently learning and building!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-card/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground mb-10">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a friendly chat about tech!
          </p>
          
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity mb-10"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <div className="flex justify-center gap-6">
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
