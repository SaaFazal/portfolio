import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - PhatOps',
  description: 'Privacy Policy for PhatOps, developed by Sahadh Fazal.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <div className="bg-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <header className="mb-12 border-b border-white/5 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground italic">Last updated: April 2026</p>
          </header>

          <article className="prose prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <p>
                This Privacy Policy explains how <strong>PhatOps</strong> (the "App"), developed by Sahadh Fazal, collects, uses, and discloses information about you when you use our mobile application designed for restaurant operations and staff management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-white/5 pb-2">1. Information We Collect</h2>
              <p>To provide you with the best business operation experience, we collect the following types of information when your manager creates an account for you or when you interact with the App:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Information:</strong> Your full name, email address (used as a username), and an optional profile picture.</li>
                <li><strong>Employment Data:</strong> Work schedules, shift hours, clock-in/clock-out times, and staff roles/levels.</li>
                <li><strong>Operational Documents:</strong> Images or PDFs you securely upload via the App, such as supplier invoices, receipts, and workplace compliance documents (e.g., Right to Work or safety certifications).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-white/5 pb-2">2. How We Use Your Information</h2>
              <p>The data collected is strictly used for internal restaurant operations and management. Specifically, we use it to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Authenticate your secure login to the App.</li>
                <li>Calculate weekly working hours and visualize live attendance.</li>
                <li>Process and extract text from uploaded supplier invoices using secure AI services to automate cost tracking.</li>
                <li>Maintain operational compliance files required by law.</li>
                <li>Send you push notifications regarding tasks, shifts, or chat mentions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-white/5 pb-2">3. Data Storage and Security</h2>
              <p>
                Your data is securely stored on <strong>Supabase</strong>, our encrypted cloud database provider. We enforce strict permissions (Row Level Security) meaning your data can only be accessed by authorized managers or staff within your specific restaurant branch.
              </p>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information or business operational data to outside third parties. Any AI parsing of invoices is processed strictly for data extraction and is not used to train global public AI models.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-white/5 pb-2">4. Data Deletion and Retention</h2>
              <p>
                If your employment ends or you wish to be removed from the system, restaurant managers have the ability to revoke your access. Upon removal, your login credentials and personal access are permanently blocked. However, historical shift records and business-related invoices associated with your account are retained internally by the restaurant to satisfy financial and legal compliance requirements.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-white/5 pb-2">5. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the App. Continuing to use the App after any changes constitutes your acceptance of the new policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 border-b border-white/5 pb-2">6. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact the developer directly or speak with your restaurant manager.
              </p>
              <p className="mt-4 font-semibold">
                Contact: <a href="mailto:work.sahadh@gmail.com" className="text-[#FF5252] hover:underline transition-all">work.sahadh@gmail.com</a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
