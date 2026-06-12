import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Modo",
  description: "How Modo handles your data. Local-first by design — your projects stay on your device.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 11, 2026">
      <p>
        This Privacy Policy explains how <strong>Igor Soares Pinto</strong>, an
        individual based in Brazil trading as <strong>Modo Design</strong>
        (&ldquo;Modo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), handles
        personal data when you use Modo, our browser-based design editor (the
        &ldquo;Service&rdquo;). We act as the data controller for the limited
        data described below.
      </p>
      <p>
        Modo is built to be <strong>local-first</strong>. Your design projects
        are stored locally in your browser on your own device — we do not upload
        or store them on our servers. This means we collect as little personal
        data as possible.
      </p>

      <h2>1. Data we collect</h2>
      <h3>Data you create (stored locally)</h3>
      <p>
        Your designs, project files, uploaded images, and editor settings are
        saved locally on your device (for example, in your browser&rsquo;s
        storage). This content does not reach our servers, and we cannot access
        it.
      </p>
      <h3>Purchase data</h3>
      <p>
        When you buy a paid plan, the transaction is handled by{" "}
        <strong>Paddle</strong>, our Merchant of Record. Paddle collects the
        information needed to process your payment (such as name, email, billing
        address, and tax location) and shares limited order details with us
        (such as your email and which plan you purchased) so we can deliver your
        license and provide support. We do not receive or store your full card
        details. See the{" "}
        <a href="https://www.paddle.com/legal/privacy">Paddle Privacy Policy</a>.
      </p>
      <h3>Support and communications</h3>
      <p>
        If you email us, we receive your email address and the contents of your
        message so we can respond.
      </p>
      <h3>Basic usage and technical data</h3>
      <p>
        When you load the Service, standard technical information (such as
        browser type and approximate region) may be processed to deliver and
        secure the application. If we use privacy-respecting analytics, it is
        limited to aggregate usage and does not include the content of your
        designs.
      </p>

      <h2>2. How we use data</h2>
      <ul>
        <li>to provide, maintain, and improve the Service;</li>
        <li>to process purchases and deliver your license (via Paddle);</li>
        <li>to respond to support requests;</li>
        <li>to comply with legal and tax obligations;</li>
        <li>to detect, prevent, and address security or technical issues.</li>
      </ul>

      <h2>3. Legal bases</h2>
      <p>
        Where applicable law such as the Brazilian General Data Protection Law
        (LGPD) or the GDPR applies, we process personal data on the bases of
        performance of a contract (providing the Service and processing your
        purchase), our legitimate interests (securing and improving the
        Service), your consent (where required), and compliance with legal
        obligations.
      </p>

      <h2>4. Sharing your data</h2>
      <p>We do not sell your personal data. We share limited data only with:</p>
      <ul>
        <li>
          <strong>Paddle</strong>, to process payments as Merchant of Record;
        </li>
        <li>
          service providers that help us operate the Service (such as hosting),
          bound by confidentiality obligations;
        </li>
        <li>
          authorities, when required by law or to protect our legal rights.
        </li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        We use only the cookies and local storage necessary to run the Service
        (for example, to save your work locally and remember basic preferences).
        Payment pages provided by Paddle may set their own cookies, governed by
        Paddle&rsquo;s policy.
      </p>

      <h2>6. Data retention</h2>
      <p>
        Because your projects live on your device, you control them and can
        delete them at any time by clearing them in the app or your browser.
        Purchase and support records are retained for as long as needed to meet
        legal, tax, and accounting obligations.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        delete, or port your personal data, to object to or restrict certain
        processing, and to withdraw consent. To exercise these rights, contact
        us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>. For data
        held by Paddle as part of a purchase, you may also contact Paddle
        directly.
      </p>

      <h2>8. International transfers</h2>
      <p>
        Some of our providers, including Paddle, may process data outside your
        country. Where required, such transfers are protected by appropriate
        safeguards.
      </p>

      <h2>9. Children</h2>
      <p>
        The Service is not directed to children under the age required by
        applicable law to consent to data processing. We do not knowingly
        collect personal data from children.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be reflected by updating the &ldquo;Last updated&rdquo; date above.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any privacy question or request, contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>.
      </p>
    </LegalPage>
  );
}
