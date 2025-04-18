
import { FileText, Merge, Scissors, FileInput, FilePlus2, ScanLine, FileUp, Image } from 'lucide-react';
import ToolCard from '@/components/ui-custom/ToolCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Powerful & Easy-to-Use
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-accent">
            Your All-in-One PDF Toolkit
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Edit, convert, and manage your PDF files with precision and ease. 
            Advanced tools with a simple interface — no installation required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#tools" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Explore Tools
            </a>
            <a href="#how-it-works" className="px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors">
              How It Works
            </a>
          </div>
        </div>
      </section>
      
      {/* PDF Tools Section */}
      <section id="tools" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              PDF Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for PDF Management
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of PDF tools helps you handle any document task with precision and ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <ToolCard
              title="Merge PDF"
              description="Combine multiple PDF files into a single document."
              icon={Merge}
              path="/merge-pdf"
            />
            
            <ToolCard
              title="Split PDF"
              description="Separate a PDF into multiple individual documents."
              icon={Scissors}
              path="/split-pdf"
            />
            
            <ToolCard
              title="Remove Pages"
              description="Delete specific pages from your PDF document."
              icon={FileInput}
              path="/remove-pages"
            />
            
            <ToolCard
              title="Extract Pages"
              description="Select and save specific pages as a new PDF."
              icon={FilePlus2}
              path="/extract-pages"
            />
            
            <ToolCard
              title="JPG to PDF"
              description="Convert your images into a professional PDF document."
              icon={Image}
              path="/jpg-to-pdf"
            />
            
            <ToolCard
              title="More Coming Soon"
              description="We're constantly adding new tools to better serve your needs."
              icon={FileText}
              path="/"
              className="border-dashed bg-muted/30 hover:bg-muted/50 hover:border-muted"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our tools are designed to be intuitive and easy to use, letting you focus on your work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <FileUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Files</h3>
              <p className="text-muted-foreground">
                Select and upload the PDF files you want to work with. Our system processes them securely.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Edit & Customize</h3>
              <p className="text-muted-foreground">
                Use our intuitive tools to make the exact changes you need to your documents.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <ScanLine className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Download Result</h3>
              <p className="text-muted-foreground">
                Get your modified PDF instantly. No watermarks, no quality loss, just perfect results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Documents?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Start using our powerful PDF tools today and experience the difference that intuitive design makes.
          </p>
          <a href="#tools" className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Get Started Now
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
