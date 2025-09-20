import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 20, 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Matters to Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                At Petzee, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>

              <section>
                <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Personal Information</h4>
                    <p className="text-muted-foreground">We collect information you provide directly, such as your name, email address, phone number, and address when you create an account or make a purchase.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Pet Information</h4>
                    <p className="text-muted-foreground">When you list pets or inquire about adoption, we collect information about the pets including breed, age, health records, and photos.</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Usage Information</h4>
                    <p className="text-muted-foreground">We automatically collect information about how you use our website, including pages visited, time spent, and features used.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide and improve our pet adoption and care services</li>
                  <li>To facilitate connections between pet owners and potential adopters</li>
                  <li>To send you important updates about your account and transactions</li>
                  <li>To provide customer support and respond to your inquiries</li>
                  <li>To comply with legal obligations and prevent fraud</li>
                  <li>To send marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Information Sharing</h3>
                <p className="text-muted-foreground mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>With your explicit consent</li>
                  <li>To facilitate pet adoptions between verified users</li>
                  <li>With service providers who help us operate our platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                <p className="text-muted-foreground mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Cookies and Tracking</h3>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Children's Privacy</h3>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Updates to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;