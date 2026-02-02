import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h3 className="text-2xl font-semibold text-foreground">
                Passionate Computer Science Student
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Eslavath Aravind, a Computer Science graduate from Bharat Institute of Engineering and Technology, with hands-on experience in Python, full-stack web development, and AI-based projects including voice assistants, face recognition systems, sign language detection, and RAG-based AI tutors. Skilled in building applications using Flask/FastAPI, React, and Supabase, with a strong focus on solving real-world problems using AI and modern web technologies.
                </p>
                <p>
                  I'm committed to pushing the boundaries of what's
                  possible with conversational AI and web technology.
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-2xl">
              <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-foreground mb-6">
                    Career Objectives
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Interested in Full Stack Development and AI/ML
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Completed academic projects and internships in relevant technologies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Eager to learn, improve skills, and work on real-world applications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Looking for an opportunity to start a career in the technology industry
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;