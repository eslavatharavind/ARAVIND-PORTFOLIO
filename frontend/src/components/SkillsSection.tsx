import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Database,
  Layout,
  Cpu,
  Zap,
  Activity,
  Brain,
  Eye,
  Cloud,
  Github,
  Send,
  Bot,
  Terminal,
  FlaskConical
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      color: 'bg-blue-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },

      ]
    },
    {
      category: 'Frameworks/Libraries',
      icon: Cpu,
      color: 'bg-green-500',
      skills: [
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Streamlit', level: 90 },
        { name: 'Tensorflow', level: 75 },
        { name: 'OpenCV', level: 85 }
      ]
    },
    {
      category: 'Databases/Cloud',
      icon: Database,
      color: 'bg-purple-500',
      skills: [
        { name: 'Supabase', level: 85 },

        { name: 'GitHub', level: 90 },
        { name: 'Vercel', level: 85 },
        { name: 'Render', level: 80 }
      ]
    },
    {
      category: 'AI & Automation Tools',
      icon: Bot,
      color: 'bg-orange-500',
      skills: [
        { name: 'Lovable', level: 95 },
        { name: 'Bolt', level: 90 },
        { name: 'ChatGPT', level: 95 },
        { name: 'Claude', level: 95 },
        { name: 'Perplexity', level: 90 },
        { name: 'Cursor AI', level: 95 }
      ]
    },
    {
      category: 'Tools & Others',
      icon: Terminal,
      color: 'bg-red-500',
      skills: [
        { name: 'Postman', level: 85 },
        { name: 'VSCode', level: 95 },
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Git', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <Card className="shadow-medium border-border overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-10">
                {skillCategories.map((category, catIndex) => (
                  <div key={catIndex} className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {category.category}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-2 rounded-lg bg-blue-50/50 border border-blue-100/50 text-blue-900 font-medium text-sm hover:bg-blue-100/80 transition-colors duration-200"
                        >
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;