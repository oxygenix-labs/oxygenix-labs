'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export default function UseCaseStories() {
    const stories = [
        {
            title: '2BHK Home in Mumbai',
            problem: 'High PM2.5 levels, poor ventilation, family health concerns',
            solution: 'Installed Oxygenix Home Pro in living room',
            result: 'AQI improved from 180 to 45. Better sleep quality reported.',
            icon: '🏠',
            gradient: 'from-purple-50 to-pink-50',
        },
        {
            title: 'IT Office in Bangalore',
            problem: '200+ employees, afternoon fatigue, sick leave issues',
            solution: 'Deployed 8 Corporate 1000 units across floors',
            result: '23% reduction in sick days. Improved productivity metrics.',
            icon: '🏢',
            gradient: 'from-blue-50 to-cyan-50',
        },
        {
            title: 'Engineering College',
            problem: 'Poor air quality in classrooms affecting student focus',
            solution: 'Installed Edu 800 in 15 classrooms and library',
            result: 'Students report better concentration. Faculty satisfaction up.',
            icon: '🏫',
            gradient: 'from-green-50 to-emerald-50',
        },
        {
            title: 'Multi-Specialty Hospital',
            problem: 'Need for clean air in waiting areas and recovery rooms',
            solution: 'MedCare 600 units in OPD and patient wards',
            result: 'Reduced airborne contaminants. Faster patient recovery.',
            icon: '🏥',
            gradient: 'from-red-50 to-orange-50',
        },
    ];

    return (
        <section id="use-cases" className="section-padding bg-white">
            <div className="container-premium">
                <SectionHeader
                    title="Real Environments, Real Results"
                    description="See how Oxygenix transforms different spaces"
                    gradient
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-gradient-to-br ${story.gradient} rounded-2xl p-8 border-2 border-slate-200`}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{story.icon}</div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">{story.title}</h3>

                            {/* Problem → Solution → Result */}
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">!</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900">Problem</h4>
                                    </div>
                                    <p className="text-slate-700 ml-8">{story.problem}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">→</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900">Solution</h4>
                                    </div>
                                    <p className="text-slate-700 ml-8">{story.solution}</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">✓</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900">Result</h4>
                                    </div>
                                    <p className="text-slate-700 ml-8">{story.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-lg text-slate-600 mb-6">
                        Want to see how Oxygenix can transform your space?
                    </p>
                    <Button variant="primary" size="lg">
                        Schedule a Site Visit
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
