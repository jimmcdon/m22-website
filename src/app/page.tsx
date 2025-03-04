import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your customers deserve digital experiences they'll love, powered by AI that actually pays for itself.
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              From the original internet boom to today's AI revolution, M22 designs systems that attract customers, keep them engaged, and turn them into your biggest fans.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Book a Free Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Separator />
      
      {/* Digital Journey Challenge Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Digital transformation shouldn't be a leap of faith
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              In 2025, businesses are investing heavily in digital and AI initiatives, but many struggle to clearly demonstrate ROI and measure success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">Unclear ROI</h3>
                <p className="text-gray-500 text-center mt-2">
                  Difficulty quantifying the potential return on investment for AI initiatives
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">Expertise Gap</h3>
                <p className="text-gray-500 text-center mt-2">
                  Lack of specialized talent to properly evaluate, customize, and deploy solutions
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">Disconnected Experiences</h3>
                <p className="text-gray-500 text-center mt-2">
                  Customer journeys that are fragmented across different digital touchpoints
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}