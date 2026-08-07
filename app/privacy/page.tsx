import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Modo",
  description:
    "How Modo handles your data: what we store in your account, who processes it, and how to delete it.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 7, 2026">
      <p>
        This Privacy Policy explains how <strong>Igor Soares Pinto</strong>, an
        individual based in Brazil trading as <strong>Modo Design</strong>
        (&ldquo;Modo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), handles
        personal data when you use Modo, our browser-based design editor (the
        &ldquo;Service&rdquo;). We act as the data controller for the data
        described below.
      </p>
      <p>
        In short: Modo needs an account, and{" "}
        <strong>
          your projects and uploaded images are stored on our servers
        </strong>{" "}
        so that they follow you between devices. We keep the data set small, we
        do not sell it, and we do not use your designs to train AI models.
      </p>

      <h2>1. Data we collect</h2>

      <h3>Account data</h3>
      <p>
        Your email address, a securely hashed version of your password, whether
        you have confirmed your email, your plan and usage counters (AI
        generations used this month, storage used), and timestamps such as when
        the account was created and last used. We never store your password in
        readable form.
      </p>

      <h3>Your projects and uploads</h3>
      <p>
        The designs you create — text, layout, colors, fonts, and the settings of
        every layer — are stored in our database so they are available wherever
        you sign in. The images you upload are stored in object storage. Your
        browser also keeps a local copy of your projects so the editor keeps
        working when you are offline; that copy is a cache and a sync buffer, and
        you can clear it through your browser at any time.
      </p>
      <p>
        We access this content only when it is necessary to operate the Service,
        investigate a technical problem, respond to a support request you have
        made, or comply with a legal obligation.
      </p>

      <h3>AI briefs</h3>
      <p>
        When you use the AI generation feature, the text of your brief is sent to
        our AI provider so it can return a design. See{" "}
        <a href="#ai">section 4</a> for details, including what the provider may
        and may not do with it. Please do not put personal or confidential
        information into a brief.
      </p>

      <h3>Purchase data</h3>
      <p>
        When you subscribe to Pro, the transaction is handled by{" "}
        <strong>Paddle</strong>, our Merchant of Record. Paddle collects the
        information needed to process your payment (such as name, email, billing
        address, and tax location) and shares limited order details with us (such
        as your email, subscription status, and renewal date) so we can activate
        your plan and provide support. We do not receive or store your full card
        details. See the{" "}
        <a href="https://www.paddle.com/legal/privacy">Paddle Privacy Policy</a>.
      </p>

      <h3>Support and communications</h3>
      <p>
        If you email us, we receive your email address and the contents of your
        message so we can respond. We also send transactional emails you cannot
        opt out of while you have an account — email confirmation, password
        resets, and important notices about your subscription or these policies.
      </p>

      <h3>Technical and security data</h3>
      <p>
        When you use the Service, standard technical information — IP address,
        browser and device type, and timestamps — is processed in server logs to
        deliver the application, keep accounts secure, detect abuse, and debug
        errors. These logs are kept for a limited period and are not used to
        build a profile of you.
      </p>

      <h2>2. How we use data</h2>
      <ul>
        <li>to create and secure your account and authenticate you;</li>
        <li>
          to store, sync, and export your projects and uploads across your
          devices;
        </li>
        <li>to generate designs when you ask the AI feature to;</li>
        <li>to enforce plan allowances and show your usage;</li>
        <li>to process subscriptions and renewals (via Paddle);</li>
        <li>to respond to support requests and send service notices;</li>
        <li>to detect, prevent, and address security, abuse, or technical issues;</li>
        <li>to comply with legal, tax, and accounting obligations.</li>
      </ul>
      <p>
        We do not sell your personal data, we do not use it for advertising, and
        we do not use your projects, uploads, or briefs to train AI models.
      </p>

      <h2>3. Legal bases</h2>
      <p>
        Where the Brazilian General Data Protection Law (LGPD) or the GDPR
        applies, we process personal data on the bases of{" "}
        <strong>performance of a contract</strong> (creating your account,
        storing and syncing your work, running AI generations you request,
        handling your subscription), our{" "}
        <strong>legitimate interests</strong> (securing the Service, preventing
        abuse, fixing faults), <strong>your consent</strong> where it is
        required, and <strong>compliance with legal obligations</strong> (tax and
        accounting records).
      </p>

      <h2 id="ai">4. AI generation and your data</h2>
      <p>
        The AI feature works by sending the text of your brief to{" "}
        <strong>Anthropic</strong> (the provider of the Claude models), which
        returns the copy, palette, font pairing, and layout values that Modo
        applies to a template.
      </p>
      <ul>
        <li>
          Only the brief and the technical parameters of the request are sent.
          Your account email, your other projects, and your uploaded images are
          not sent.
        </li>
        <li>
          Anthropic processes this data as our service provider under its
          commercial API terms and{" "}
          <strong>does not use it to train its models</strong>.
        </li>
        <li>
          This processing happens outside Brazil and outside the European
          Economic Area — see <a href="#transfers">section 9</a>.
        </li>
        <li>
          Because a brief is free text, anything you type into it is sent. Do not
          include personal data about yourself or others, or confidential
          information.
        </li>
      </ul>

      <h2>5. Who processes your data</h2>
      <p>
        We do not sell your personal data. We share it only with the service
        providers we need in order to run Modo, each bound by contractual
        confidentiality and data-protection obligations:
      </p>
      <ul>
        <li>
          <strong>Paddle</strong> — payment processing and invoicing as Merchant
          of Record.
        </li>
        <li>
          <strong>Neon</strong> — managed PostgreSQL database hosting for account
          data and projects.
        </li>
        <li>
          <strong>Cloudflare</strong> — object storage (R2) for the images you
          upload, plus network and security services.
        </li>
        <li>
          <strong>Anthropic</strong> — AI processing of the briefs you submit,
          as described above.
        </li>
        <li>
          our hosting and transactional email providers, used to run the
          application and to send account emails such as confirmations and
          password resets.
        </li>
      </ul>
      <p>
        We may also disclose data to authorities when required by law or to
        establish, exercise, or defend legal claims.
      </p>

      <h2>6. Cookies and local storage</h2>
      <p>
        We use only what is necessary to run the Service: a cookie that keeps you
        signed in, and browser storage (including IndexedDB) that holds the local
        copy of your projects and your editor preferences. We do not use
        advertising cookies or third-party tracking. Payment pages provided by
        Paddle may set their own cookies, governed by Paddle&rsquo;s policy.
      </p>

      <h2>7. Data retention</h2>
      <ul>
        <li>
          <strong>Projects and uploads</strong> — kept while your account is
          active. When you delete a project, or your account, we delete the
          associated records and files; residual copies in encrypted backups
          expire on their normal rotation schedule, within 30 days.
        </li>
        <li>
          <strong>Account data</strong> — kept until you delete your account.
        </li>
        <li>
          <strong>Server logs</strong> — kept for a limited period for security
          and debugging, then deleted.
        </li>
        <li>
          <strong>Billing records</strong> — retained by us and by Paddle for as
          long as tax and accounting law requires, even after you close your
          account.
        </li>
      </ul>
      <p>
        You can delete your account from within the app. To have it done for you,
        write to{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> from your
        account&rsquo;s email address.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        delete, or port your personal data, to object to or restrict certain
        processing, to withdraw consent, and to know with whom we share your
        data. Under the LGPD you may also ask us to confirm whether we process
        your data and to anonymize unnecessary or excessive data.
      </p>
      <p>
        You can exercise most of these directly in the app: your projects are
        exportable as <strong>.modo</strong> files, and your account is deletable
        from your settings. For anything else, contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> and we will
        respond within the period required by applicable law. For data held by
        Paddle as part of a purchase, you may also contact Paddle directly. You
        also have the right to complain to your local data-protection authority —
        the ANPD in Brazil.
      </p>

      <h2 id="transfers">9. International transfers</h2>
      <p>
        We are based in Brazil and our providers — including Paddle, Neon,
        Cloudflare, and Anthropic — process data in other countries, including
        the United States and the European Union. Where required, these transfers
        are covered by appropriate safeguards, such as the European
        Commission&rsquo;s Standard Contractual Clauses or an equivalent
        mechanism under the LGPD.
      </p>

      <h2>10. Security</h2>
      <p>
        We protect your data with encryption in transit, hashed passwords, access
        controls, and encrypted storage at rest with our providers. No service
        can promise perfect security. If a breach affects your personal data, we
        will notify you and the relevant authority as required by law.
      </p>

      <h2>11. Children</h2>
      <p>
        The Service is not directed to children. You must be at least 18, or old
        enough to enter into a contract where you live and have permission from a
        parent or guardian. We do not knowingly collect personal data from
        children; if you believe a child has given us data, write to us and we
        will delete it.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will revise the
        &ldquo;Last updated&rdquo; date above and, for material changes, notify
        account holders by email.
      </p>

      <h2>13. Contact</h2>
      <p>
        For any privacy question or request, contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>.
      </p>
    </LegalPage>
  );
}
