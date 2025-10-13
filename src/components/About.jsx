import { Workflow, PencilRuler, TrendingUpDown } from "lucide-react"

export const About = () => {

  return (
  
  <section id="about" className="py-24 px-4 relative">
  
      <div className="container mx-auto max-w-5xl">
  
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 ">

            <div>
              <img 
                src="/pixelArt.svg" 
                alt="Felipe Barros" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover mx-auto"
              />
            </div>
  
            <h3 className="text-2xl font-semibold">Passionate Front-End & Salesforce Developer</h3>

            <p className="text-muted-foreground">
              I'm Felipe, a developer focused on creating clean, responsive, and functional 
              experiences on the web and Salesforce platform. My goal is to bridge the gap between 
              elegant design and technical performance.
             </p>

            <p className="text-muted-foreground">
              What drives me is transforming complex business needs into smart, 
              intuitive systems that deliver measurable impact and long-term scalability.           
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              
              <a href="#contact" className="cosmic-button"> Get In touch</a>
              <a href="/CV_FELIPE_BARROS.pdf" download="FelipeBarrosCV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV</a>
           
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">

                  <div className="p-3 rounded-full bg-primary/10">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">

                    <h4 className="font-semibold text-lg"> Business Process Automation </h4>

                    <p className="text-muted--foreogrond">
                      Automating workflows and processes in Salesforce to boost efficiency and 
                      reduce manual effort.
                    </p>

                  </div>

              </div>
        
            </div>

            <div className="gradient-border p-6 card-hover">
        
              <div className="flex items-start gap-4">
        
                  <div className="p-3 rounded-full bg-primary/10">
                    <PencilRuler className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
        
                    <h4 className="font-semibold text-lg"> Custom Application Development </h4>
                    
                    <p className="text-muted--foreogrond">
                      Building tailored Salesforce and web applications that transform 
                      complex needs into seamless digital experiences.
                    </p>
        
                  </div>

              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUpDown className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Data Integration & System Optimization </h4>
                    <p className="text-muted--foreogrond">
                      Connecting systems and optimizing Salesforce performance to 
                      ensure smooth data flow and smarter decision-making.
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