import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 20, 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                This Cookie Policy explains how Petzee uses cookies and similar technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <section>
                <h3 className="text-xl font-semibold mb-3">What Are Cookies?</h3>
                <p className="text-muted-foreground">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">Essential Cookies</h4>
                    <p className="text-muted-foreground">These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</p>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Performance Cookies</h4>
                    <p className="text-muted-foreground">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
                  </div>

                  <div className="border-l-4 border-muted-foreground pl-4">
                    <h4 className="font-semibold">Functional Cookies</h4>
                    <p className="text-muted-foreground">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                  </div>

                  <div className="border-l-4 border-destructive pl-4">
                    <h4 className="font-semibold">Targeting Cookies</h4>
                    <p className="text-muted-foreground">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Specific Cookies We Use</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Cookie Name</th>
                        <th className="border border-border p-3 text-left">Purpose</th>
                        <th className="border border-border p-3 text-left">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">session_id</td>
                        <td className="border border-border p-3">Maintains your login session</td>
                        <td className="border border-border p-3">Session</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">preferences</td>
                        <td className="border border-border p-3">Remembers your site preferences</td>
                        <td className="border border-border p-3">1 year</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">analytics</td>
                        <td className="border border-border p-3">Tracks site usage for improvements</td>
                        <td className="border border-border p-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">marketing</td>
                        <td className="border border-border p-3">Enables personalized advertising</td>
                        <td className="border border-border p-3">6 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Third-Party Cookies</h3>
                <p className="text-muted-foreground mb-3">
                  We also use cookies from third-party services to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Google Analytics:</strong> To understand how visitors interact with our website</li>
                  <li><strong>Google Ads:</strong> To show you relevant advertisements</li>
                  <li><strong>Facebook Pixel:</strong> To track conversions and build custom audiences</li>
                  <li><strong>Payment Processors:</strong> To securely process transactions</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Managing Your Cookie Preferences</h3>
                <p className="text-muted-foreground mb-4">
                  You have several options for managing cookies:
                </p>
                
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Browser Settings</h4>
                  <p className="text-muted-foreground">
                    Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Opt-Out Tools</h4>
                  <p className="text-muted-foreground">
                    You can opt out of interest-based advertising by visiting the Digital Advertising Alliance's opt-out page or the Network Advertising Initiative's opt-out page.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button>Cookie Preferences</Button>
                  <Button variant="outline">Opt Out of Analytics</Button>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Impact of Disabling Cookies</h3>
                <p className="text-muted-foreground">
                  Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. Essential cookies cannot be disabled as they are necessary for the basic functionality of our services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Cookie Consent</h3>
                <p className="text-muted-foreground">
                  When you first visit our website, you will see a cookie banner asking for your consent to use non-essential cookies. You can change your preferences at any time by clicking the "Cookie Preferences" link in our footer.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Updates to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                </p>
                <div className="mt-3 p-4 bg-muted rounded-lg">
                  <p><strong>Email:</strong> privacy@petzee.com</p>
                  <p><strong>Phone:</strong> +91 9876543210</p>
                  <p><strong>Address:</strong> 123 Pet Street, Mumbai, Maharashtra 400001, India</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;