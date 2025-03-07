"use client";

import * as React from "react";
import { NavMenu } from "@/components/layout/nav-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Target, Brain, Heart, BarChart, Ear, PenTool, TestTube, Trophy, Clock, Building2, Users, Laptop, Shield } from "lucide-react";
import { WaitlistModal } from "@/components/ui/waitlist-modal";
import { ZenHero } from "@/components/blocks/zen-hero";
import { useState } from "react";

export default function Home() {
  const [activeVersion, setActiveVersion] = useState(0);
  const totalVersions = 3;
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const nextVersion = () => {
    setActiveVersion((prev) => (prev + 1) % totalVersions);
  };

  const prevVersion = () => {
    setActiveVersion((prev) => (prev - 1 + totalVersions) % totalVersions);
  };

  const openWaitlist = () => setIsWaitlistOpen(true)
  const closeWaitlist = () => setIsWaitlistOpen(false)

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Navigation */}
      <NavMenu onContactClick={openWaitlist} />
      
      {/* Hero Section */}
      <ZenHero
        title="Human expertise meets AI innovation"
        subtitle="Helping businesses like yours create better digital experiences that your customers will love and your team can actually use"
        actions={[
          {
            label: "Let's Talk About Your Project",
            href: "#contact",
            variant: "default"
          }
        ]}
        className="bg-white border-b border-slate-200"
        titleClassName="text-slate-900"
        subtitleClassName="text-slate-600 max-w-[700px]"
      />
      
      <Separator className="bg-slate-200" />
      
      {/* Services Section */}
      <section id="services" className="w-full py-24 md:py-32 bg-white border-b border-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-display font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Feeling stuck with your digital experience?
            </h2>
            <p className="max-w-[600px] text-slate-600 text-lg md:text-xl">
              You're not alone. Let's turn those digital challenges into opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
              <div className="mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                  <Lightbulb className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mb-2 font-display text-xl font-medium">Making Tech Work</h3>
              <p className="mb-8 text-slate-600">Want to use new tools like AI but not sure how to make them practical for your business?</p>
              <a href="#contact" className="text-sm font-medium text-slate-900 hover:text-slate-700">
                Learn more →
              </a>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
              <div className="mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                  <Target className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mb-2 font-display text-xl font-medium">Customer Experience</h3>
              <p className="mb-8 text-slate-600">Need to make your digital experience more personal and engaging for your customers?</p>
              <a href="#contact" className="text-sm font-medium text-slate-900 hover:text-slate-700">
                Learn more →
              </a>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
              <div className="mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                  <BarChart className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mb-2 font-display text-xl font-medium">Real Results</h3>
              <p className="mb-8 text-slate-600">Looking for practical ways to measure and improve the impact of your digital investments?</p>
              <a href="#contact" className="text-sm font-medium text-slate-900 hover:text-slate-700">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="w-full py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl font-display font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                  Simple solutions to complex digital challenges
                </h2>
                <p className="text-lg text-slate-600">
                  We bring 18+ years of experience making digital technology work for businesses like yours. Our approach combines practical solutions with the latest tools, always focusing on what actually works.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Brain className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium">Practical Solutions</h3>
                      <p className="mt-2 text-slate-600">Focus on solutions that your team can actually use and maintain</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Heart className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium">Personal Experience</h3>
                      <p className="mt-2 text-slate-600">Make customer experiences more engaging and meaningful</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <BarChart className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium">Measurable Impact</h3>
                      <p className="mt-2 text-slate-600">Track and improve the real business impact of every change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-8 space-y-6">
                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
                  <h3 className="font-display text-xl font-medium mb-6">How We Work</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                        <Ear className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Listen & Understand</h4>
                        <p className="mt-2 text-slate-600">Get to know your business, team, and customers</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                        <PenTool className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Design & Build</h4>
                        <p className="mt-2 text-slate-600">Create solutions that are simple to use and maintain</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                        <TestTube className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Test & Improve</h4>
                        <p className="mt-2 text-slate-600">Make sure everything works and keeps getting better</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Map Section - Carousel */}
      <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl text-slate-900 mb-6">
              Your Journey with M22
            </h2>
            <p className="max-w-[700px] mx-auto text-slate-600 text-lg leading-relaxed">
              Explore different ways to visualize your path to success
            </p>
            <div className="flex justify-center items-center gap-6 mt-10">
              <Button
                variant="outline"
                onClick={prevVersion}
                className="rounded-full w-12 h-12 p-0 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              >
                ←
              </Button>
              <span className="text-sm text-slate-600 font-medium">
                {activeVersion + 1} / {totalVersions}
              </span>
              <Button
                variant="outline"
                onClick={nextVersion}
                className="rounded-full w-12 h-12 p-0 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
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
                  <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden md:block"></div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold">
                          1
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900 mb-3">Discovery</h3>
                      <p className="text-slate-600 text-center">
                        Initial assessment and strategy alignment
                      </p>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold">
                          2
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900 mb-3">Design</h3>
                      <p className="text-slate-600 text-center">
                        Solution architecture and AI integration
                      </p>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold">
                          3
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900 mb-3">Development</h3>
                      <p className="text-slate-600 text-center">
                        Implementation and testing
                      </p>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold">
                          4
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900 mb-3">Growth</h3>
                      <p className="text-slate-600 text-center">
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
                  <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900">Strategic Planning</h3>
                    </div>
                    <p className="text-slate-600 mb-6">Expert analysis enhanced by AI-powered market insights and trend prediction</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Market Analysis
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Competitive Research
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Growth Strategy
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service 2 */}
                  <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900">AI Integration</h3>
                    </div>
                    <p className="text-slate-600 mb-6">Seamless integration of AI tools with your existing business processes</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Process Automation
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Custom AI Solutions
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Performance Monitoring
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service 3 */}
                  <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-medium text-slate-900">Team Enablement</h3>
                    </div>
                    <p className="text-slate-600 mb-6">Empower your team with AI tools while maintaining human expertise</p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Training Programs
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
                        Workflow Integration
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 mr-3 text-slate-900">•</span>
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
                      <h4 className="text-lg font-medium mb-2">Initial Assessment</h4>
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
                      <h4 className="text-lg font-medium mb-2">Solution Design</h4>
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
                      <h4 className="text-lg font-medium mb-2">Implementation</h4>
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
            <h2 className="font-display text-2xl font-normal tracking-tighter sm:text-3xl md:text-4xl mb-4">
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
              <h3 className="font-display text-xl font-normal mb-4">We Do It For You</h3>
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
                <Button variant="outline" className="w-full" onClick={openWaitlist}>
                  Learn More
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
              <h3 className="font-display text-xl font-normal mb-4">We Do It With You</h3>
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
                <Button className="w-full" onClick={openWaitlist}>
                  Learn More
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
              <h3 className="font-display text-xl font-normal mb-4">Strategic Partnership</h3>
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
                <Button variant="outline" className="w-full" onClick={openWaitlist}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="w-full py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Trophy className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-medium text-slate-900">200+</div>
                  </div>
                  <div className="text-slate-600">Digital Projects Delivered</div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Clock className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-medium text-slate-900">18+</div>
                  </div>
                  <div className="text-slate-600">Years Experience</div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Building2 className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-medium text-slate-900">25+</div>
                  </div>
                  <div className="text-slate-600">Industries Served</div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Users className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-medium text-slate-900">95%</div>
                  </div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
                <h3 className="font-display text-xl font-medium mb-6">Core Expertise</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Laptop className="h-5 w-5" strokeWidth={1.5} />
                        <span className="font-medium text-slate-900">Digital Strategy</span>
                      </div>
                      <span className="font-medium text-slate-900">98%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5" strokeWidth={1.5} />
                        <span className="font-medium text-slate-900">User Experience Design</span>
                      </div>
                      <span className="font-medium text-slate-900">96%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5" strokeWidth={1.5} />
                        <span className="font-medium text-slate-900">Technical Architecture</span>
                      </div>
                      <span className="font-medium text-slate-900">94%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Brain className="h-5 w-5" strokeWidth={1.5} />
                        <span className="font-medium text-slate-900">AI Integration</span>
                      </div>
                      <span className="font-medium text-slate-900">92%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-slate-900 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
                <h3 className="font-display text-xl font-medium mb-6">Latest Projects</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Brain className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">AI-Powered Analytics Platform</h4>
                      <p className="mt-1 text-sm text-slate-600">Increased customer insights by 300%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Users className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Mobile Experience Redesign</h4>
                      <p className="mt-1 text-sm text-slate-600">Improved conversion rate by 85%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
                      <Shield className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Digital Transformation Strategy</h4>
                      <p className="mt-1 text-sm text-slate-600">40% reduction in operational costs</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#contact" className="text-sm font-medium text-slate-900 hover:text-slate-700">
                    View all projects →
                  </a>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 transition-all hover:border-slate-300">
                <h3 className="font-display text-xl font-medium mb-6">Impact Focus</h3>
                <p className="text-slate-600 mb-8">Throughout these waves, our focus has remained consistent: creating measurable business impact through exceptional digital experiences.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center p-4 rounded-lg bg-slate-50 text-slate-900 font-medium">
                    ROI Driven
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-lg bg-slate-50 text-slate-900 font-medium">
                    User Centered
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-lg bg-slate-50 text-slate-900 font-medium">
                    Data Informed
                  </div>
                  <div className="flex items-center justify-center p-4 rounded-lg bg-slate-50 text-slate-900 font-medium">
                    Future Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Case Section */}
      <section id="business-case" className="w-full py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-6">
              <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                Our Business Case Methodology
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Every successful digital transformation starts with a solid business case. Our structured approach ensures alignment between technology investments and business outcomes.
              </p>
              
              <div className="space-y-6 mt-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 font-semibold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Frame the Financial Story</h4>
                    <p className="text-slate-600 mt-1">We identify the key financial drivers and metrics that matter most to your business</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 font-semibold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Establish Baselines</h4>
                    <p className="text-slate-600 mt-1">We measure current performance to create a foundation for tracking improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 font-semibold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Project ROI</h4>
                    <p className="text-slate-600 mt-1">We create realistic projections for return on investment with clear timelines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 font-semibold">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-900">Align Stakeholders</h4>
                    <p className="text-slate-600 mt-1">We ensure everyone understands the expected outcomes and their role in achieving them</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="font-display text-2xl font-medium text-slate-900 mb-6">Business Case Components</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-900">•</span>
                    <span>Current state analysis and performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-900">•</span>
                    <span>Opportunity identification and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-900">•</span>
                    <span>Cost-benefit analysis with realistic timelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-900">•</span>
                    <span>Risk assessment and mitigation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-900">•</span>
                    <span>Implementation roadmap with key milestones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-slate-900">•</span>
                    <span>Success metrics and measurement framework</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-600 text-base italic">
                    "Every project includes a clear business case that demonstrates expected return on investment, giving you confidence in your digital investments."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-display font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[600px] text-slate-600 text-lg md:text-xl">
              Common questions about our approach to digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                <h3 className="font-display text-lg font-medium text-slate-900 mb-3">
                  How do you start each engagement?
                </h3>
                <p className="text-slate-600">
                  Every engagement begins with our proven business case analysis. We follow a structured approach to frame the financial story, identify primary business goals, calculate baselines, and project ROI. This ensures all stakeholders have clarity on expected outcomes before we begin. <a href="#business-case" className="text-slate-900 hover:text-slate-700 font-medium">Learn more about our methodology →</a>
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                <h3 className="font-display text-lg font-medium text-slate-900 mb-3">
                  How long does a typical digital transformation take?
                </h3>
                <p className="text-slate-600">
                  The timeline varies based on the scope and complexity of your goals. Our business case-driven approach means we focus on delivering value incrementally, with initial results often visible within 2-3 months. A comprehensive transformation typically spans 6-18 months, but we structure our work to deliver measurable ROI at each stage.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                <h3 className="font-display text-lg font-medium text-slate-900 mb-3">
                  How do you approach AI implementation?
                </h3>
                <p className="text-slate-600">
                  We start with your business case to identify where AI can deliver the most value. Rather than implementing technology for its own sake, we focus on practical applications that solve real problems. Our approach combines off-the-shelf solutions where appropriate and custom development where needed, always with a clear ROI target.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                <h3 className="font-display text-lg font-medium text-slate-900 mb-3">
                  How do you measure success?
                </h3>
                <p className="text-slate-600">
                  Success metrics are defined in the initial business case and tracked throughout the project. We establish clear KPIs tied to business outcomes—whether that's increased revenue, improved customer satisfaction, operational efficiency, or other metrics specific to your goals. We provide regular reporting on these metrics.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                <h3 className="font-display text-lg font-medium text-slate-900 mb-3">
                  What makes M22 different from other agencies?
                </h3>
                <p className="text-slate-600">
                  Our business case-driven approach sets us apart. We don't just build what you ask for—we help you define what will actually move the needle for your business. Our team combines deep technical expertise with business acumen, ensuring that every solution we deliver is both technically sound and aligned with your objectives.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300">
                <h3 className="font-display text-lg font-medium text-slate-900 mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-slate-600">
                  Yes, we offer flexible support options tailored to your needs. From full managed services to periodic check-ins and optimization, we ensure your digital solutions continue to deliver value long after the initial implementation. Our support plans include regular business case reviews to ensure continued ROI.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Ready to build your business case? Let's talk →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 md:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-6">
              <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl text-white">
                Ready to transform your digital experience?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Book a free 30-minute Strategy Call where we'll identify quick wins and long-term AI opportunities for your business.
              </p>
              <p className="text-slate-300 italic">
                You'll walk away with valuable insights, whether we end up working together or not.
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-300">hello@m22.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-slate-300">(805) 330-1560</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-white hover:bg-slate-100 text-slate-900 px-8" size="lg" onClick={openWaitlist}>
                  Book Your Strategy Call Now
                </Button>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="font-display text-2xl font-medium text-white mb-6">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm text-white">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Brief Discovery</h4>
                    <p className="text-slate-300 mt-1">We'll discuss your current challenges and goals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Opportunity Identification</h4>
                    <p className="text-slate-300 mt-1">We'll identify potential areas for improvement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm text-white">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Next Steps</h4>
                    <p className="text-slate-300 mt-1">We'll outline a potential path forward if there's a good fit</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-950 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="font-display text-xl font-medium text-white mb-2">M22</h3>
              <p className="text-slate-400">
                Creates digital experiences that work for real people and real businesses
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">© 2024 M22. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </main>
  );
}