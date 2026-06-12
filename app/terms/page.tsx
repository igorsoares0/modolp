import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Modo",
  description: "The terms and conditions for using Modo, the browser-based design editor.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 11, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of Modo, a browser-based design editor (the &ldquo;Service&rdquo;),
        operated by <strong>Igor Soares Pinto</strong>, an individual based in
        Brazil, trading as <strong>Modo Design</strong> (&ldquo;Modo&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing
        or using the Service, you agree to be bound by these Terms. If you do
        not agree, do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        Modo is a design tool that runs in your web browser. It lets you create
        graphics for social media and marketing using templates, text, images,
        assets, layers, and export tools. Modo is <strong>local-first</strong>:
        your projects are stored locally on your device, not on our servers,
        unless a feature explicitly states otherwise.
      </p>

      <h2>2. Eligibility and accounts</h2>
      <p>
        You may use the free features of Modo without creating an account. Where
        an account or purchase is required, you agree to provide accurate
        information and to keep it up to date. You are responsible for activity
        that occurs through your access.
      </p>

      <h2>3. Plans, pricing, and payments</h2>
      <p>
        Modo offers a free plan and a paid one-time &ldquo;Pro — Lifetime&rdquo;
        plan. Prices are shown on our website and may change for future
        purchases; changes do not affect purchases already completed.
      </p>
      <p>
        Payments are processed by <strong>Paddle</strong>, our authorized
        reseller and <strong>Merchant of Record</strong>. When you make a
        purchase, your contract for the sale is with Paddle, and Paddle&rsquo;s
        buyer terms also apply. Paddle handles billing, payment, taxes (such as
        VAT/sales tax where applicable), and refunds on our behalf. You can
        review the{" "}
        <a href="https://www.paddle.com/legal/checkout-buyer-terms">
          Paddle Checkout Buyer Terms
        </a>{" "}
        for details.
      </p>

      <h2>4. License to use Modo</h2>
      <p>
        Subject to these Terms, we grant you a personal, non-exclusive,
        non-transferable, revocable license to use the Service for creating your
        own designs. You may not:
      </p>
      <ul>
        <li>copy, resell, sublicense, or redistribute the Service itself;</li>
        <li>
          reverse engineer, decompile, or attempt to extract the source code,
          except where permitted by law;
        </li>
        <li>
          use the Service to create content that is illegal, infringing,
          harmful, or that violates the rights of others;
        </li>
        <li>
          interfere with or disrupt the integrity or performance of the
          Service.
        </li>
      </ul>

      <h2>5. Your content</h2>
      <p>
        You retain all rights to the designs and content you create with Modo.
        Because your projects are stored locally on your device, you are
        responsible for backing them up. We do not claim ownership of your work
        and do not access projects that never leave your device. You are
        responsible for ensuring you have the rights to any images, fonts, or
        other materials you import.
      </p>

      <h2>6. Our intellectual property</h2>
      <p>
        The Service, including its software, design, templates, built-in assets,
        and the &ldquo;Modo&rdquo; name and logo, is owned by Modo Design or its
        licensors and is protected by intellectual property laws. Nothing in
        these Terms transfers those rights to you, except for the limited
        license described above.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, whether express or
        implied, to the maximum extent permitted by law. We do not warrant that
        the Service will be uninterrupted, error-free, or that it will meet your
        specific requirements. You are responsible for maintaining backups of
        your local projects.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Modo Design will not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or for any loss of data, profits, or goodwill, arising from
        your use of or inability to use the Service. Our total liability for any
        claim relating to the Service will not exceed the amount you paid for
        the Service in the twelve months preceding the claim.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        your access if you breach these Terms or use the Service unlawfully.
        Provisions that by their nature should survive termination will survive.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date above. Continued use of the Service
        after changes take effect constitutes acceptance of the updated Terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Federative Republic of
        Brazil, without regard to conflict-of-law rules. Disputes will be
        subject to the competent courts of Brazil, except where mandatory
        consumer-protection law provides otherwise.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>.
      </p>
    </LegalPage>
  );
}
