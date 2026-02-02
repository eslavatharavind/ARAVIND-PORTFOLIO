import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Professional Experience
                        </h2>
                        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                        <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                            A comprehensive overview of my professional internship experience and industry contributions.
                        </p>
                    </div>


                    {/* Experience - Centered Single Column Layout */}
                    <div className="max-w-5xl mx-auto">
                        <Card className="shadow-medium border-border overflow-hidden">
                            <CardHeader className="bg-muted/30 border-b border-border py-6">
                                <CardTitle className="text-2xl font-bold text-primary text-center">
                                    Professional Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 lg:p-12">
                                <div className="grid md:grid-cols-2 gap-12 relative">
                                    {/* Vertical Divider Line */}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60 hidden md:block transform -translate-x-1/2"></div>

                                    {/* Altoks Internship - FIRST */}
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-primary pl-4">
                                            <h4 className="text-xl font-bold text-foreground">AI Full Stack Developer Intern</h4>
                                            <p className="text-primary font-semibold">Altoks AI</p>
                                            <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span className="text-sm font-medium">March 2025 - July 2025</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Engineered VOCMATE, an advanced real-time AI speaking partner platform. Led the integration of voice, LLM, and web technologies to deliver seamless conversational AI experiences.
                                        </p>
                                        <div className="group relative rounded-xl overflow-hidden border border-border shadow-strong transition-transform duration-300 hover:scale-[1.02]">
                                            <img
                                                src="/results/altoks-certificate.jpg"
                                                alt="Altoks Internship Certificate"
                                                className="w-full h-auto"
                                            />
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                        </div>
                                    </div>

                                    {/* Cognifyz Internship - SECOND */}
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-primary pl-4">
                                            <h4 className="text-xl font-bold text-foreground">Python Development Intern</h4>
                                            <p className="text-primary font-semibold">Cognifyz Technologies</p>
                                            <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span className="text-sm font-medium">May 2024 - June 2024</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Gained hands-on experience in developing backend logic, contributing to FastAPI, and optimizing database queries using Python and modern frameworks.
                                        </p>
                                        <div className="group relative rounded-xl overflow-hidden border border-border shadow-strong transition-transform duration-300 hover:scale-[1.02]">
                                            <img
                                                src="/results/cognifyz-certificate.jpg"
                                                alt="Cognifyz Internship Certificate"
                                                className="w-full h-auto"
                                            />
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
