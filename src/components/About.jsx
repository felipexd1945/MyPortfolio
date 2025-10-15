import { Workflow, PencilRuler, TrendingUpDown } from "lucide-react"
import { Trans, useTranslation } from "react-i18next"

export const About = () => {

  const { t } = useTranslation()

  return (
  
  <section id="about" className="py-24 px-4 relative">
  
      <div className="container mx-auto max-w-5xl">
  
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <Trans i18nKey="about.title">
            About <span className="text-primary">Me</span>
          </Trans>
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
  
            <h3 className="text-2xl font-semibold">{t("about.subtitle")}</h3>

            <p className="text-muted-foreground">
              {t("about.paragraph1")}
             </p>

            <p className="text-muted-foreground">
              {t("about.paragraph2")}         
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              
              <a href="#contact" className="cosmic-button"> 
                {t("about.buttons.contact")} 
              </a>
              <a href="/CV_FELIPE_BARROS.pdf" download="FelipeBarrosCV.pdf" className="px-6 py-2 rounded-full border border-primary 
              text-primary hover:bg-primary/10 transition-colors duration-300"> 
                {t("about.buttons.cv")} 
              </a>
           
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">

                  <div className="p-3 rounded-full bg-primary/10">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">

                    <h4 className="font-semibold text-lg"> {t("about.cards.automation.title")} </h4>

                    <p className="text-muted--foreogrond">
                      {t("about.cards.automation.text")}
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
        
                    <h4 className="font-semibold text-lg"> {t("about.cards.customDev.title")} </h4>
                    
                    <p className="text-muted--foreogrond">
                      {t("about.cards.customDev.text")}
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
                    <h4 className="font-semibold text-lg"> {t("about.cards.integration.title")} </h4>
                    <p className="text-muted--foreogrond">
                      {t("about.cards.integration.text")}
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