import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Modo",
  description:
    "How Modo handles your data: your designs, images and AI key stay on your device; we only keep a record of your license.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 10, 2026">
      <p>
        This Privacy Policy explains how <strong>Igor Soares Pinto</strong>, an
        individual based in Brazil trading as <strong>Modo Design</strong>
        (&ldquo;Modo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), handles
        personal data when you use Modo, our browser-based design editor (the
        &ldquo;Service&rdquo;). We act as the data controller for the data
        described below.
      </p>
      <p>
        In short: Modo has <strong>no accounts</strong>, and{" "}
        <strong>
          your designs, uploaded images and AI key never leave your device
        </strong>{" "}
        — they live in your browser, and we never receive them. The only
        personal data we keep is the record of the license you bought.
      </p>

      <h2>1. Data that stays on your device</h2>
      <p>
        Your projects, the images you upload, your editor preferences, your
        license key and your Anthropic API key are stored in your browser&rsquo;s
        local storage (IndexedDB). They are not sent to us, and we have no copy
        of them. Clearing your browser&rsquo;s site data deletes them — which is
        why the app lets you back everything up to a file.
      </p>

      <h2>2. Data we collect</h2>

      <h3>License records</h3>
      <p>
        When you buy a license we keep a small record of it: a license
        identifier, where it was bought (direct or through a marketplace such as
        AppSumo), the purchase reference (a Paddle transaction id or the
        marketplace&rsquo;s license key), its status (active or refunded), and
        timestamps. For direct purchases we also keep the email address you used
        at checkout, so we can send you your key and help you if you lose it.
        Marketplace purchases come to us without an email address.
      </p>

      <h3>License checks</h3>
      <p>
        Your key is verified on your device, without contacting us. When you are
        online, the app also asks our server — at most once a day — whether your
        license is still active (for example, that it was not refunded). That
        request carries only the license identifier; like any web request, our
        server sees your IP address.
      </p>

      <h3>Purchase data</h3>
      <p>
        Direct purchases are handled by <strong>Paddle</strong>, our Merchant of
        Record. Paddle collects what it needs to process your payment (such as
        name, email, billing address and tax location) and shares limited order
        details with us (such as your email and the transaction id) so we can
        issue your license and provide support. We never receive your card
        details. See the{" "}
        <a href="https://www.paddle.com/legal/privacy">Paddle Privacy Policy</a>
        . If you buy through a marketplace such as AppSumo, its own privacy
        policy applies to the purchase.
      </p>

      <h3>Support and communications</h3>
      <p>
        If you email us, we receive your email address and the contents of your
        message so we can respond. After a direct purchase we send you a
        transactional email with your license key.
      </p>

      <h3>Technical and security data</h3>
      <p>
        Loading the app and the license checks are processed in server logs —
        IP address, browser type and timestamps — to deliver the Service, detect
        abuse and debug errors. These logs are kept for a limited period and are
        not used to build a profile of you.
      </p>

      <h2 id="ai">3. AI generation and your data</h2>
      <p>
        The AI feature runs on <strong>your own Anthropic account</strong>. When
        you generate a design, your browser sends the text of your brief and a
        description of the chosen template directly to{" "}
        <strong>Anthropic</strong> (the provider of the Claude models), using the
        API key you entered in the app.
      </p>
      <ul>
        <li>
          These requests go straight from your device to Anthropic.{" "}
          <strong>They do not pass through our servers</strong>, and we cannot
          see your briefs, the results or your API key.
        </li>
        <li>
          Anthropic processes them under the agreement between you and
          Anthropic (its commercial API terms and privacy policy), not as our
          service provider. Usage is billed to your Anthropic account.
        </li>
        <li>
          Because a brief is free text, anything you type into it is sent. Do
          not include personal data about others or confidential information.
        </li>
      </ul>

      <h2>4. How we use data</h2>
      <ul>
        <li>to issue, deliver and verify your license;</li>
        <li>to deactivate a license that was refunded or charged back;</li>
        <li>to respond to support requests;</li>
        <li>to detect, prevent and address security, abuse or technical issues;</li>
        <li>to comply with legal, tax and accounting obligations.</li>
      </ul>
      <p>
        We do not sell your personal data, we do not use it for advertising, and
        we do not use anything you make with Modo to train AI models — we never
        receive it.
      </p>

      <h2>5. Legal bases</h2>
      <p>
        Where the Brazilian General Data Protection Law (LGPD) or the GDPR
        applies, we process personal data on the bases of{" "}
        <strong>performance of a contract</strong> (issuing and verifying the
        license you bought), our <strong>legitimate interests</strong> (securing
        the Service, preventing abuse, fixing faults), and{" "}
        <strong>compliance with legal obligations</strong> (tax and accounting
        records).
      </p>

      <h2>6. Who processes your data</h2>
      <p>
        We share data only with the service providers we need in order to run
        Modo, each bound by contractual confidentiality and data-protection
        obligations:
      </p>
      <ul>
        <li>
          <strong>Paddle</strong> — payment processing and invoicing as Merchant
          of Record for direct purchases.
        </li>
        <li>
          <strong>AppSumo</strong> and other marketplaces — for licenses bought
          through them, which tell us when a license is purchased, activated or
          refunded.
        </li>
        <li>
          <strong>Neon</strong> — managed PostgreSQL database hosting for license
          records.
        </li>
        <li>
          our hosting and transactional email providers, used to serve the
          application and to send license emails.
        </li>
      </ul>
      <p>
        We may also disclose data to authorities when required by law or to
        establish, exercise, or defend legal claims.
      </p>

      <h2>7. Cookies and local storage</h2>
      <p>
        We do not set tracking or advertising cookies. The app uses your
        browser&rsquo;s local storage, as described in section 1, to hold your
        work, your license and your preferences on your device. Payment pages
        provided by Paddle may set their own cookies, governed by Paddle&rsquo;s
        policy.
      </p>

      <h2>8. Data retention</h2>
      <ul>
        <li>
          <strong>Data on your device</strong> — stays until you delete it, in
          the app or by clearing your browser&rsquo;s site data. We cannot
          recover it for you.
        </li>
        <li>
          <strong>License records</strong> — kept for as long as the license
          exists, so it keeps working and can be recovered.
        </li>
        <li>
          <strong>Server logs</strong> — kept for a limited period for security
          and debugging, then deleted.
        </li>
        <li>
          <strong>Billing records</strong> — retained by us and by Paddle for as
          long as tax and accounting law requires.
        </li>
      </ul>

      <h2>9. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        delete, or port your personal data, to object to or restrict certain
        processing, and to know with whom we share your data. Under the LGPD you
        may also ask us to confirm whether we process your data and to anonymize
        unnecessary or excessive data.
      </p>
      <p>
        Everything you make is already in your hands: export projects as{" "}
        <strong>.modo</strong> files or back up everything from the app&rsquo;s
        settings. For your license record, contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> and we will
        respond within the period required by applicable law. For data held by
        Paddle or a marketplace as part of a purchase, you may also contact them
        directly. You also have the right to complain to your local
        data-protection authority — the ANPD in Brazil.
      </p>

      <h2 id="transfers">10. International transfers</h2>
      <p>
        We are based in Brazil and our providers — including Paddle, AppSumo and
        Neon — process data in other countries, including the United States and
        the European Union. Where required, these transfers are covered by
        appropriate safeguards, such as the European Commission&rsquo;s Standard
        Contractual Clauses or an equivalent mechanism under the LGPD.
      </p>

      <h2>11. Security</h2>
      <p>
        We protect the data we hold with encryption in transit, access controls,
        and encrypted storage at rest with our providers. Your license key is
        cryptographically signed, so it cannot be forged. The data on your device
        is protected by your device and browser — keep them secure. If a breach
        affects personal data we hold, we will notify you and the relevant
        authority as required by law.
      </p>

      <h2>12. Children</h2>
      <p>
        The Service is not directed to children. You must be at least 18, or old
        enough to enter into a contract where you live and have permission from a
        parent or guardian. We do not knowingly collect personal data from
        children; if you believe a child has given us data, write to us and we
        will delete it.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will revise the
        &ldquo;Last updated&rdquo; date above and, for material changes, notify
        direct buyers by email.
      </p>

      <h2>14. Contact</h2>
      <p>
        For any privacy question or request, contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>.
      </p>
    </LegalPage>
  );
}
