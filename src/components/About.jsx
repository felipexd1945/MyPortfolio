import { Code, User, Briefcase } from "lucide-react"

export const About = () => {

  return (
  
  <section id="about" className="py-24 px-4 relative">
  
      <div className="container mx-auto max-w-5xl">
  
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 ">
  
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

            <p className="text-muted-foreground">
              I'm Felipe, a web developer with a passion for crafting beautiful, functional digital experiences.
              With a background in front-end development, I specialize in building responsive, user-friendly websites and applications.
            </p>

            <p className="text-muted-foreground">
              Beyond coding, I love sharing my knowledge through tech content creation. Whether it's writing articles, making videos, 
              or engaging on social media, I enjoy helping others navigate the ever-evolving world of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              
              <a href="#contact" className="cosmic-button"> Get In touch</a>
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV</a>
           
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">

                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">

                    <h4 className="font-semibold text-lg"> Web development</h4>

                    <p className="text-muted--foreogrond">
                      Building responsive, user-friendly websites and applications using modern technologies.
                    </p>

                  </div>

              </div>
        
            </div>

            <div className="gradient-border p-6 card-hover">
        
              <div className="flex items-start gap-4">
        
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
        
                    <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                    
                    <p className="text-muted--foreogrond">
                      Building responsive, user-friendly websites and applications using modern technologies.
                    </p>
        
                  </div>

              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Project Management</h4>
                    <p className="text-muted--foreogrond">
                      Building responsive, user-friendly websites and applications using modern technologies.
                    </p>
                  </div>

              </div>
            </div>
          </div>
 
        </div>
      </div>
      
    </section>
  )
}