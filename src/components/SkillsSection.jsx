const skills = [
  { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Vue.js', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'Django', level: 80, category: 'Backend' },
    { name: 'SQL', level: 75, category: 'Backend' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'Webpack', level: 65, category: 'Tools' },
    { name: 'Jest', level: 60, category: 'Tools' },
    { name: 'CI/CD', level: 70, category: 'Tools' },
  
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/38">
        <div className="container mx-auto mx-w-5xl">
          <h2 className="text-3xl md:textt-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {skills.map((skill, key) => (
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