import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | PostMiners",
  description: "Learn how PostMiners collects, uses, stores, and protects your information.",
};

const contactEmail = "postminor.delmasitsolutions@gmail.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>PostMiner</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">
            <strong>Last Updated: June 23, 2026</strong>
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Welcome to PostMiners (&quot;PostMiners&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            This Privacy Policy explains how PostMiners collects, uses, stores, and protects your information when you use our website, platform, and services.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may collect the following types of information:
            </p>

            <h3 className="text-lg font-semibold mb-3">Account Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile picture (when provided through Google Sign-In)</li>
              <li>Account authentication information</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Social Media Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you connect your social media accounts to PostMiners, we may access information authorized by you through the respective platform APIs, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Social media account identifiers</li>
              <li>Profile information</li>
              <li>Connected pages or business accounts</li>
              <li>Content required for publishing, scheduling, and automation features</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Content Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Posts you create</li>
              <li>Images and media uploaded by you</li>
              <li>Scheduling preferences</li>
              <li>Automation settings</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Device information</li>
              <li>Browser information</li>
              <li>IP address</li>
              <li>Usage analytics</li>
              <li>Log data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and maintain PostMiners services</li>
              <li>Authenticate users</li>
              <li>Enable social media automation features</li>
              <li>Generate AI-powered content</li>
              <li>Schedule and publish content on connected social media platforms</li>
              <li>Improve platform performance and user experience</li>
              <li>Detect, prevent, and investigate security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take reasonable technical and organizational measures to protect your information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PostMiners does not sell, rent, or trade user information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Access to connected social media accounts is restricted to authorized platform operations required to provide our services. We implement security controls designed to prevent unauthorized access, disclosure, modification, or destruction of user data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Sharing of Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We do not sell your personal information.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Information may only be shared:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>With service providers that help operate our platform</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, security, and users</li>
              <li>With social media platforms when authorized by you through platform integrations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">PostMiners may utilize third-party services including:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Google Authentication</li>
              <li>Social Media Platform APIs (such as Meta/Facebook and Instagram APIs)</li>
              <li>Cloud hosting providers</li>
              <li>Analytics and monitoring tools</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These third parties may process information according to their own privacy policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Google Sign-In</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">If you choose to sign in using Google, we may receive:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Your name</li>
              <li>Email address</li>
              <li>Profile picture</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We only use this information for authentication, account creation, and account management.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We retain information only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Provide our services</li>
              <li>Maintain account functionality</li>
              <li>Meet legal and regulatory obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              When information is no longer required, it is deleted or anonymized where reasonably possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent where applicable</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Data Deletion Requests</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Users may request deletion of their account and associated data by contacting:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline"
              >
                {contactEmail}
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Upon verification of the request, we will delete applicable personal information within a reasonable period unless retention is required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PostMiners is not intended for children under the age of 13.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take appropriate steps to delete the information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">11. International Users</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be processed and stored in countries where our service providers operate. By using PostMiners, you consent to such processing and storage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy periodically.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions, concerns, or privacy-related requests, please contact us:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">PostMiners</p>
            <p className="text-muted-foreground leading-relaxed">
              Email:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
