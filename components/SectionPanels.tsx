import React from 'react';
import { DownloadIcon } from './Icons';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-brand-teal-400 mb-3">{title}</h3>
    <div className="space-y-4 text-gray-300 leading-relaxed">{children}</div>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-gray-700 text-brand-teal-300 rounded-full px-4 py-1 text-sm font-medium">
        {children}
    </span>
);

export const ResumePanel: React.FC = () => (
        <div className="space-y-6">
                <p className="text-base text-gray-400 text-center">You can view my resume below or download a copy for reference.</p>
                            <div
                                className="w-full max-w-3xl mx-auto rounded-lg shadow-md border border-gray-800 overflow-y-auto scrollbar-thin scrollbar-thumb-brand-teal-400 scrollbar-track-gray-800"
                                style={{height: '900px'}}
                            >
                            <iframe
                                src="/Karthikeyan[resume].pdf#toolbar=0"
                                title="Resume PDF"
                                className="w-full h-full"
                                style={{border: 'none'}}
                            />
                        </div>
            <p className="text-sm text-gray-500 text-center mt-2">Updated: September 2025</p>
            <p>Download my resume to get a comprehensive overview of my skills, experience, and projects. Please feel free to reach out if you have any questions.</p>
            <a 
                href="/Karthikeyan[resume].pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-brand-teal-700 rounded-lg shadow-md hover:bg-brand-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal-500 focus:ring-opacity-50"
            >
                <div className="w-6 h-6"><DownloadIcon /></div>
                Download Resume (PDF)
            </a>
        </div>
);

export const SkillsPanel: React.FC = () => (
    <div>
        <Section title="Programming Language">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-5 h-5"/><span>Java</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5"/><span>Python</span></span></Pill>
            </div>
        </Section>
        <Section title="Web Development">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-5 h-5"/><span>HTML</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-5 h-5"/><span>CSS</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5"/><span>JavaScript</span></span></Pill>
            </div>
        </Section>
        <Section title="Software Tools">
            <div className="flex flex-wrap gap-2 items-center">
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5"/><span>Git & Github</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" className="w-5 h-5"/><span>VSCode</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="w-5 h-5"/><span>Canva</span></span></Pill>
                <Pill><span className="flex items-center gap-2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg" alt="Google Colab" className="w-5 h-5"/><span>Google Colab</span></span></Pill>
            </div>
        </Section>
    </div>
);

export const ProjectsPanel: React.FC = () => (
    <div className="space-y-6">
        <Section title="Migrant Care">
            <p>Designed and developed Migrant Care, a worker safety and protection platform. Implemented the backend using Java and built a responsive website with full-stack technologies to manage worker data, enhance safety, and support identification in emergency cases.</p>
        </Section>
        <Section title="Diabetes Prediction">
            <p>Created a Diabetes Prediction System leveraging Java for model development and deployed it as a responsive web application using web development technologies. The project focuses on predicting health risks with improved accessibility and user-friendly interfaces.</p>
        </Section>
    </div>
);

export const ExperiencePanel: React.FC = () => (
    <div className="space-y-6">
        <Section title="Internship Experience">
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-white">Web Development Intern – TRIO's Technology</h4>
                    <p className="text-gray-400">Gained hands-on experience in building and maintaining responsive websites, working on real-world web development projects, and enhancing front-end and back-end skills.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white">Java Programming Intern – CodSoft</h4>
                    <p className="text-gray-400">Developed Java-based applications and improved problem-solving abilities by working on industry-level coding tasks and mini projects.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white">Python Programming Intern – CodSoft</h4>
                    <p className="text-gray-400">Strengthened Python programming knowledge through practical assignments, focusing on automation, data handling, and application development.</p>
                </div>
            </div>
        </Section>
    </div>
);

export const ContactPanel: React.FC = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-xl font-semibold text-brand-teal-400 mb-3">Get in Touch</h3>
            <p className="mb-2"><strong>📞 Phone:</strong> <a href="tel:+916380802715" className="hover:text-brand-teal-300">+91 63808 02715</a></p>
            <p><strong><span style={{display:'inline-block',verticalAlign:'middle',marginRight:'4px'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg></span> Email:</strong> <a href="mailto:karthikeyan.p.10b@gmail.com" className="hover:text-brand-teal-300">karthikeyan.p.10b@gmail.com</a></p>
        </div>
    </div>
);