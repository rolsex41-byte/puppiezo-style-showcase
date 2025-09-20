import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: September 20, 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                By accessing and using Petzee's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>

              <section>
                <h3 className="text-xl font-semibold mb-3">1. Service Description</h3>
                <p className="text-muted-foreground">
                  Petzee is an online platform that connects pet lovers with pets available for adoption, pet products, and pet care services. We facilitate connections but are not responsible for the actual transactions between users.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">2. User Accounts</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">To use certain features, you must create an account. You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                    <li>Use the platform only for lawful purposes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">3. Pet Listings and Adoptions</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">When listing pets for adoption, you certify that:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>You are the legal owner or authorized representative</li>
                    <li>All information provided is accurate and truthful</li>
                    <li>The pet is healthy and has received appropriate veterinary care</li>
                    <li>You will provide all relevant health and vaccination records</li>
                    <li>You will screen potential adopters responsibly</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">4. Prohibited Activities</h3>
                <p className="text-muted-foreground mb-3">You may not:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Use the platform for commercial breeding operations without disclosure</li>
                  <li>Post false or misleading information about pets</li>
                  <li>Engage in animal abuse or neglect</li>
                  <li>Violate any local, state, or federal laws</li>
                  <li>Harass, threaten, or intimidate other users</li>
                  <li>Attempt to circumvent platform fees or policies</li>
                  <li>Use automated systems to access the platform</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">5. Platform Fees and Payments</h3>
                <p className="text-muted-foreground">
                  Certain services may incur fees. All fees are clearly disclosed before transaction completion. Payment processing is handled by third-party providers, and you agree to their terms as well.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">6. Content and Intellectual Property</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    By posting content on our platform, you grant Petzee a non-exclusive license to use, display, and distribute your content for platform operations. You retain ownership of your content but represent that you have the right to grant this license.
                  </p>
                  <p className="text-muted-foreground">
                    The Petzee platform, including its design, features, and functionality, is owned by us and protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">7. Disclaimers and Limitations</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Petzee provides the platform "as is" without warranties of any kind. We do not guarantee:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>The accuracy of user-provided information</li>
                    <li>The health or temperament of listed pets</li>
                    <li>Successful adoptions or transactions</li>
                    <li>Continuous platform availability</li>
                    <li>Compliance with local regulations by users</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">8. Liability Limitations</h3>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Petzee shall not be liable for any indirect, incidental, special, or consequential damages arising from platform use, including but not limited to pet health issues, adoption disputes, or financial losses.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">9. Dispute Resolution</h3>
                <p className="text-muted-foreground">
                  While we encourage users to resolve disputes directly, we may provide mediation services for adoption-related conflicts. For legal disputes, parties agree to first attempt mediation before pursuing litigation.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">10. Account Termination</h3>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate accounts that violate these terms, engage in prohibited activities, or pose risks to the community. Users may also delete their accounts at any time.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">11. Governing Law</h3>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of India. Any legal proceedings shall be conducted in the courts of Mumbai, Maharashtra.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">12. Changes to Terms</h3>
                <p className="text-muted-foreground">
                  We may update these terms periodically. Material changes will be communicated via email or platform notifications. Continued use after changes constitutes acceptance of new terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at:
                </p>
                <div className="mt-3 p-4 bg-muted rounded-lg">
                  <p><strong>Email:</strong> legal@petzee.com</p>
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

export default TermsOfService;