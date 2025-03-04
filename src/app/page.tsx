import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
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
                  <span>Strategic assessment of where AI can truly add value</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Human-centered design enhanced by AI capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clear metrics and ROI tracking from day one</span>
                </li>
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

      {/* Journey Map Section - Placeholder for now */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
              Your path to AI-enhanced success
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-lg">
              A clear roadmap that balances human expertise with AI capabilities at every step
            </p>
          </div>
          {/* Journey map visualization will go here */}
        </div>
      </section>
    </main>
  );
}