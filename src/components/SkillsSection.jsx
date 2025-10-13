import { useState } from 'react';

const skills = [
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 40, category: 'Frontend' },
  { name: 'HTML/CSS', level: 85, category: 'Frontend' },
  { name: 'LWC', level: 90, category: 'Frontend' },
  { name: 'Visualforce', level: 80, category: 'Frontend' },
  
  { name: 'Node.js', level: 65, category: 'Backend' },
  { name: 'APEX', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 60, category: 'Backend' },
  { name: 'Python', level: 45, category: 'Backend' },
  { name: 'SQL', level: 75, category: 'Backend' },
  { name: 'SOQL', level: 85, category: 'Backend' },
  { name: 'SOSL', level: 65, category: 'Backend' },
  { name: 'Java', level: 65, category: 'Backend' },
  { name: 'C#', level: 65, category: 'Backend' },
  { name: 'ADVPL', level: 65, category: 'Backend' },
  { name: 'TL++', level: 65, category: 'Backend' },

  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'VSCode', level: 80, category: 'Tools' },
  { name: 'Azure DevOps', level: 60, category: 'Tools' },
  { name: 'CI/CD', level: 60, category: 'Tools' },
  { name: 'Postman', level: 85, category: 'Tools' },

  { name: 'AWS', level: 60, category: 'Cloud' },
  { name: 'Salesforce', level: 90, category: 'Cloud' },
  { name: 'Azure', level: 50, category: 'Cloud' }

];

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Cloud'];

export const SkillsSection = () => {

  const [activeCategory, setActiveCategory] = useState("all")
  const filteredSkills = activeCategory === "all" ? skills : skills.filter(skill => skill.category.toLowerCase() === activeCategory.toLowerCase());

  return (

    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    
        <div className="container mx-auto mx-w-5xl">
    
          <h2 className="text-3xl md:textt-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills </span>
          </h2>

          <div className='flex flex-wrap justify-center gap-4 mb-12'>
    
            {categories.map((category, key) => (
    
              <button 
                key={key}
                className={`px-5 py-2 rounded-full border transition-colors ${
                  activeCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-primary text-white border-primary'
                  : 'bg-transparent text-muted-foreground border-muted-foreground hover:bg-primary/10 hover:border-primary hover:text-primary'
                }`}
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                {category}
              </button>
            
            ))}

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredSkills.map((skill, key) => (

              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              
                <div className="text-left mb-4">
              
                  <h3 className="font-semibold text-lg">
                    {skill.name}  
                  </h3>  
              
                </div>
              
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              
                  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out" 
                    style={{width: skill.level+"%"}}
                  />

                </div>
              
                <div className="text-right mt-1">

                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

    </section>
  
  )
}