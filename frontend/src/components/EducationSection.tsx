import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering',
      institution: 'Bharat Institute of Engineering and Technology',
      duration: '2021 - 2025',
      cgpa: '6.92',
      status: 'Pursuing',
      description: 'Focusing on core computer science subjects including Data Structures, Algorithms, AI/ML, and Full Stack Development.'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Sri Chaitanya Junior College',
      duration: '2019 - 2021',
      cgpa: '5.74',
      status: 'Completed',
      description: 'Completed intermediate education with focus on Mathematics, Physics, and Chemistry, building a strong foundation for engineering studies.'
    },
    {
      degree: 'Secondary School Certificate (Class X)',
      institution: 'Chala Linga Reddy (ZPHS)',
      duration: '2019',
      cgpa: '8.3',
      status: 'Completed',
      description: 'Completed secondary education with excellent academic performance, demonstrating strong analytical and problem-solving skills.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Educational Background
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              My academic journey reflecting dedication to learning and continuous growth in technology and engineering.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-medium flex items-center justify-center z-10">
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${edu.status === 'Pursuing'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-accent text-accent-foreground'
                            }`}>
                            {edu.status}
                          </span>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h3>

                        <p className="text-primary font-medium mb-3">
                          {edu.institution}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            CGPA: {edu.cgpa}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;