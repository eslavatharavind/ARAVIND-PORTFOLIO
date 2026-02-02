import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Eye, Bot } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Facial Recognition Based Attendance Management System',
      description:
        'A comprehensive attendance tracking system that automates student attendance using advanced facial recognition technology, featuring live capture and detailed reporting.',
      icon: Eye,
      technologies: ['Python', 'OpenCV', 'Tkinter', 'NumPy', 'Pandas'],
      category: 'Machine Learning',
      status: 'Completed',
      codeUrl: 'https://github.com/eslavatharavind/Face-Recognition-Attendance-System',
      images: [
        '/results/facial-ui.png',
        '/results/facial-cam.png',
        '/results/facial-date-filter.png',
        '/results/facial-stats.png'
      ],
    },
    {
      title: 'VOCMATE - AI Speaking Partner',
      description:
        'An AI-powered speaking partner app that supports real-time voice conversations using LLM-based language generation and realistic voice synthesis.',
      icon: Bot,
      technologies: ['Python', 'Flask', 'Deepgram', 'ElevenLabs', 'Supabase'],
      category: 'Artificial Intelligence',
      status: 'Completed',
      codeUrl: 'https://github.com/eslavatharavind/VOCMATE-AI-TUTOR',
      images: [
        '/results/vocmate-ui.png',
        '/results/vocmate-avatar.png',
        '/results/vocmate-progress.png',
        '/results/vocmate-session.png'
      ],
    },
    {
      title: 'EchoLearn AI - Voice Tutor Agent',
      description:
        'A comprehensive AI-powered voice tutor system that enables interactive learning from PDF and Jupyter documents using RAG and voice synthesis.',
      icon: Bot,
      technologies: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'Whisper', 'Streamlit'],
      category: 'Artificial Intelligence',
      status: 'Completed',
      codeUrl: 'https://github.com/eslavatharavind/EchoLearner-AI',
      images: [
        '/results/EchoLearner-AI.png',
        '/results/EchoLearner-AI (2).png',
        '/results/EchoLearner-AI (3).png',
        '/results/EchoLearner-AI (4).png'
      ],
    },
    {
      title: 'Sign Language Detection System',
      description:
        'An AI-powered system that recognizes and translates hand gestures into text in real-time to facilitate communication for speech-impaired individuals.',
      icon: Eye,
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'NumPy'],
      category: 'Computer Vision',
      status: 'Completed',
      codeUrl: 'https://github.com/eslavatharavind/Sign-Language-Detection',
      images: [
        '/results/Sign Language Detection.png'
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-accent/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Explore my key projects that demonstrate my technical skills and problem-solving abilities across different domains.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={index}
                  className="shadow-medium hover:shadow-strong transition-all duration-300 border-border hover:border-primary/20 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <IconComponent className="h-6 w-6 text-primary-foreground" />
                              </div>
                              <div>
                                <Badge
                                  variant="secondary"
                                  className={`mb-2 ${project.status === 'Completed'
                                    ? 'bg-green-100 text-green-800 border-green-200'
                                    : 'bg-blue-100 text-blue-800 border-blue-200'
                                    }`}
                                >
                                  {project.status}
                                </Badge>
                                <p className="text-sm text-primary font-medium">
                                  {project.category}
                                </p>
                              </div>
                            </div>
                          </div>

                          <CardTitle className="text-2xl font-bold text-foreground mb-3">
                            {project.title}
                          </CardTitle>

                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </CardHeader>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-4">
                        {project.codeUrl && (
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="shadow-soft px-6">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="bg-muted/30 p-8 border-l border-border flex flex-col justify-center">
                      <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-primary" />
                        Project Showcase
                      </h4>
                      {project.images && project.images.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {project.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="group relative aspect-video rounded-lg overflow-hidden border border-border shadow-soft bg-white">
                              <img
                                src={img}
                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground bg-white/40 rounded-xl border border-dashed border-border">
                          <Bot className="h-10 w-10 mb-3 opacity-20" />
                          <p className="text-sm italic">Project documentation in progress</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
