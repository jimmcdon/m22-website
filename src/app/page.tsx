"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Home() {
  const [activeVersion, setActiveVersion] = useState(0);
  const totalVersions = 3;

  const nextVersion = () => {
    setActiveVersion((prev) => (prev + 1) % totalVersions);
  };

  const prevVersion = () => {
    setActiveVersion((prev) => (prev - 1 + totalVersions) % totalVersions);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Human expertise meets AI innovation
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              M22 combines strategic thinking with AI capabilities to create digital experiences that deliver real value
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Book a Free Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Separator />
      
      {/* Does This Sound Familiar Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Ready to bridge the gap between AI potential and business reality?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              In 2024, companies are racing to implement AI, but the path to measurable success remains unclear
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <h3 className="font-display text-lg font-bold">The AI Puzzle</h3>
                <p className="text-gray-500 text-center mt-2">
                  You know AI could transform your business, but implementing it effectively feels like solving a complex puzzle
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <h3 className="font-display text-lg font-bold">Human Factor</h3>
                <p className="text-gray-500 text-center mt-2">
                  Finding the right balance between AI automation and human touch points in your customer journey
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <h3 className="font-display text-lg font-bold">ROI Uncertainty</h3>
                <p className="text-gray-500 text-center mt-2">
                  Struggling to quantify the return on investment for AI initiatives while keeping costs manageable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our North Star Approach */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Where human insight meets AI precision
              </h2>
              <p className="text-gray-500 md:text-lg">
                Our North Star methodology combines decades of digital expertise with cutting-edge AI capabilities. We don't just implement technology – we create thoughtful, strategic solutions that consider both human needs and business objectives.
              </p>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Strategic assessment of where AI can truly add value</li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Human-centered design enhanced by AI capabilities</li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Clear metrics and ROI tracking from day one</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-4">Our Proven Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Discovery & Strategy</h4>
                    <p className="text-gray-500">Map your current processes and identify AI opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Design & Development</h4>
                    <p className="text-gray-500">Create human-centered solutions powered by AI</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Implementation & Optimization</h4>
                    <p className="text-gray-500">Launch, measure, and continuously improve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map Section - Carousel */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
              Your Journey with M22
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-lg mb-8">
              Explore different ways to visualize your path to success
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Button
                variant="outline"
                onClick={prevVersion}
                className="rounded-full w-12 h-12 p-0"
              >
                ←
              </Button>
              <span className="text-sm text-gray-500">
                {activeVersion + 1} / {totalVersions}
              </span>
              <Button
                variant="outline"
                onClick={nextVersion}
                className="rounded-full w-12 h-12 p-0"
              >
                →
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeVersion * 100}%)` }}
            >
              {/* Version 1: Visual Journey Steps */}
              <div className="w-full flex-shrink-0">
                <div className="relative">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block"></div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                          1
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">Discovery</h3>
                      <p className="text-gray-500 text-center text-sm">
                        Initial assessment and strategy alignment
                      </p>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                          2
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">Design</h3>
                      <p className="text-gray-500 text-center text-sm">
                        Solution architecture and AI integration
                      </p>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                          3
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">Development</h3>
                      <p className="text-gray-500 text-center text-sm">
                        Implementation and testing
                      </p>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                          4
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">Growth</h3>
                      <p className="text-gray-500 text-center text-sm">
                        Continuous optimization and scaling
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version 2: Services Grid */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Service 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-lg font-bold">Strategic Planning</h3>
                    </div>
                    <p className="text-gray-500 mb-4">Expert analysis enhanced by AI-powered market insights and trend prediction</p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Market Analysis
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Competitive Research
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Growth Strategy
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-lg font-bold">AI Integration</h3>
                    </div>
                    <p className="text-gray-500 mb-4">Seamless integration of AI tools with your existing business processes</p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Process Automation
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Custom AI Solutions
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Performance Monitoring
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-lg font-bold">Team Enablement</h3>
                    </div>
                    <p className="text-gray-500 mb-4">Empower your team with AI tools while maintaining human expertise</p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Training Programs
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Workflow Integration
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                        Ongoing Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Version 3: Timeline */}
              <div className="w-full flex-shrink-0">
                <div className="space-y-8">
                  {/* Timeline Item 1 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-full md:w-1/3 text-center md:text-right">
                      <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium mb-2">
                        Month 1
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">Initial Assessment</h3>
                      <p className="text-gray-500">Comprehensive analysis of your current processes and AI opportunities</p>
                    </div>
                    <div className="hidden md:block w-12 flex-shrink-0 relative">
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-slate-200"></div>
                      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-4 border-white"></div>
                    </div>
                    <div className="w-full md:w-1/3">
                      <ul className="space-y-2 text-gray-500">
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Process Mapping
                        </li>
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          AI Readiness Assessment
                        </li>
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Strategy Development
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Item 2 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-full md:w-1/3 text-center md:text-right">
                      <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium mb-2">
                        Months 2-3
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">Solution Design</h3>
                      <p className="text-gray-500">Creating the perfect blend of human expertise and AI capabilities</p>
                    </div>
                    <div className="hidden md:block w-12 flex-shrink-0 relative">
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-slate-200"></div>
                      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-4 border-white"></div>
                    </div>
                    <div className="w-full md:w-1/3">
                      <ul className="space-y-2 text-gray-500">
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Custom Solution Architecture
                        </li>
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Integration Planning
                        </li>
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Team Training Design
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Item 3 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-full md:w-1/3 text-center md:text-right">
                      <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium mb-2">
                        Months 4-6
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">Implementation</h3>
                      <p className="text-gray-500">Carefully managed rollout with continuous monitoring and adjustment</p>
                    </div>
                    <div className="hidden md:block w-12 flex-shrink-0 relative">
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-slate-200"></div>
                      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-4 border-white"></div>
                    </div>
                    <div className="w-full md:w-1/3">
                      <ul className="space-y-2 text-gray-500">
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Phased Deployment
                        </li>
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Team Training
                        </li>
                        <li className="flex items-center">
                          <span className="w-4 h-4 mr-2 text-slate-900">•</span>
                          Performance Optimization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveVersion(index)}
                className={`w-3 h-3 rounded-full ${
                  activeVersion === index ? "bg-slate-900" : "bg-slate-200"
                }`}
                aria-label={`Go to version ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
              Choose your path to innovation
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-lg">
              Three flexible ways to leverage our expertise and AI capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* We Do It For You */}
            <div className="flex flex-col p-8 bg-slate-50 rounded-lg">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-slate-200 rounded-full text-sm font-medium text-slate-700">
                  Full Service
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">We Do It For You</h3>
              <p className="text-gray-500 mb-6">
                Our team handles everything from strategy to implementation, combining our expertise with AI tools to deliver complete solutions.
              </p>
              <ul className="space-y-3 text-gray-500 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  End-to-end project management
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Custom AI solution development
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Ongoing optimization & support
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>

            {/* We Do It With You */}
            <div className="flex flex-col p-8 bg-slate-900 rounded-lg text-white">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-slate-800 rounded-full text-sm font-medium text-slate-200">
                  Collaborative
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">We Do It With You</h3>
              <p className="text-slate-300 mb-6">
                Partner with our team to augment your capabilities, transfer knowledge, and accelerate your AI transformation.
              </p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Hands-on training & workshops
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Co-development of solutions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Knowledge transfer focus
                </li>
              </ul>
              <div className="mt-auto">
                <Button className="w-full" asChild>
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>

            {/* Strategic Partnership */}
            <div className="flex flex-col p-8 bg-slate-50 rounded-lg">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-slate-200 rounded-full text-sm font-medium text-slate-700">
                  Long-term
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Strategic Partnership</h3>
              <p className="text-gray-500 mb-6">
                Long-term collaboration to guide your organization's AI journey with strategic planning and ongoing support.
              </p>
              <ul className="space-y-3 text-gray-500 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Strategic roadmap development
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Regular strategy sessions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Priority access to new AI tools
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise and Credibility Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
              Nearly two decades of creating magical digital experiences
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-lg">
              Leading digital transformations across multiple technology waves, now pioneering AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Stats and Recognition */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
                  <div className="text-gray-500">Digital Projects Delivered</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">18+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">25+</div>
                  <div className="text-gray-500">Industries Served</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
                  <div className="text-gray-500">Client Satisfaction</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-bold mb-4">Technology Evolution</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Internet Boom Era</h4>
                      <p className="text-gray-500">Built foundational digital experiences for early adopters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Mobile Revolution</h4>
                      <p className="text-gray-500">Transformed customer engagement through responsive design</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">AI Wave</h4>
                      <p className="text-gray-500">Creating intelligent, personalized experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Expertise Areas */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-bold mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Digital Strategy</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">User Experience Design</span>
                      <span className="text-sm font-medium">96%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Technical Architecture</span>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">AI Integration</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-bold mb-4">Impact Focus</h3>
                <p className="text-gray-500 mb-6">Throughout these waves, our focus has remained consistent: creating measurable business impact through exceptional digital experiences.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600 font-medium">ROI Driven</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600 font-medium">User Centered</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600 font-medium">Data Informed</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-600 font-medium">Future Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Ready to start your AI journey?
              </h2>
              <p className="text-slate-300 md:text-lg">
                Book a free strategy call with our team. We'll discuss your goals, challenges, and how we can help you leverage AI effectively.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-300">contact@m22.dev</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                    placeholder="Tell us about your project"
                  />
                </div>
                <Button className="w-full">
                  Book Your Free Strategy Call
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}