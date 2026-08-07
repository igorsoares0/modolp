import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Modo",
  description:
    "The terms and conditions for using Modo, the AI-powered browser-based design editor.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 7, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of Modo, a browser-based design editor (the &ldquo;Service&rdquo;),
        operated by <strong>Igor Soares Pinto</strong>, an individual based in
        Brazil, trading as <strong>Modo Design</strong> (&ldquo;Modo&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By creating an
        account or using the Service, you agree to be bound by these Terms. If
        you do not agree, do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        Modo is a design tool that runs in your web browser. It lets you create
        graphics for social media and marketing using templates, text, images,
        assets, layers, AI generation, and export tools.
      </p>
      <p>
        Modo is an <strong>account-based, cloud-backed service</strong>. Your
        projects and uploaded images are stored on our servers so they are
        available on every device you sign in from. Your browser also keeps a
        local copy so the editor keeps working if your connection drops, and
        syncs your changes when you are back online.
      </p>

      <h2>2. Eligibility and accounts</h2>
      <p>
        You need an account to use Modo. To create one you provide an email
        address and a password, and you must confirm your email address before
        you can reach the editor.
      </p>
      <p>
        You must be at least 18 years old, or old enough to enter into a binding
        contract where you live and have permission from a parent or guardian.
        You agree to provide accurate information, to keep it up to date, and to
        keep your password confidential. You are responsible for all activity
        that occurs under your account. Tell us promptly at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> if you
        believe your account has been compromised.
      </p>

      <h2>3. Plans, pricing, and payments</h2>
      <p>
        Modo offers a <strong>Free</strong> plan and a paid{" "}
        <strong>Pro</strong> plan. The Free plan is not a trial: it includes
        unlimited projects, watermark-free export, and a monthly allowance of AI
        generations. Pro is a <strong>monthly subscription of $10</strong> that
        raises the AI and storage allowances and unlocks the premium templates.
        The allowances in force for each plan are the ones shown on our{" "}
        <Link href="/#pricing">pricing page</Link>.
      </p>
      <p>
        <strong>Renewal and cancellation.</strong> Pro renews automatically each
        month until you cancel. You can cancel at any time from your account;
        cancellation stops the next renewal and you keep Pro until the end of the
        period you have already paid for. See our{" "}
        <a href="/refund">Refund Policy</a>.
      </p>
      <p>
        <strong>Price changes.</strong> We may change prices. A change never
        affects a period you have already paid for, and we will give you notice
        before it applies to a renewal so you can cancel first.
      </p>
      <p>
        Payments are processed by <strong>Paddle</strong>, our authorized
        reseller and <strong>Merchant of Record</strong>. When you subscribe,
        your contract for the sale is with Paddle, and Paddle&rsquo;s buyer terms
        also apply. Paddle handles billing, payment, taxes (such as VAT/sales tax
        where applicable), and refunds on our behalf. You can review the{" "}
        <a href="https://www.paddle.com/legal/checkout-buyer-terms">
          Paddle Checkout Buyer Terms
        </a>{" "}
        for details.
      </p>

      <h2>4. Usage allowances</h2>
      <p>
        Each plan includes a monthly number of AI generations and a cap on image
        storage. AI allowances reset at the start of each billing month and do
        not carry over. When you reach your storage cap you can still edit and
        export your existing projects, but you will need to delete images or
        upgrade before uploading more. The app shows your current usage.
      </p>

      <h2>5. AI generation</h2>
      <p>
        Modo can generate a design from a short brief you write. To do this we
        send the text of your brief to our AI provider (see our{" "}
        <a href="/privacy">Privacy Policy</a>), which returns text, colors,
        fonts, and layout values that we apply to a template.
      </p>
      <ul>
        <li>
          AI output is generated automatically and is not reviewed by us. It may
          be inaccurate, unoriginal, or unsuitable for your purpose.{" "}
          <strong>You are responsible for reviewing what you publish.</strong>
        </li>
        <li>
          As between you and us, you own the designs you produce with the AI
          feature. We claim no ownership over them.
        </li>
        <li>
          Similar briefs can produce similar results for different users, so we
          cannot promise that AI output is unique to you or protectable.
        </li>
        <li>
          Do not put personal data, confidential information, or anything you are
          not allowed to disclose into a brief.
        </li>
        <li>
          If a generation fails validation, Modo falls back to the
          template&rsquo;s original design. A generation that produces a result
          counts against your allowance even if you do not like the result.
        </li>
      </ul>

      <h2>6. License to use Modo</h2>
      <p>
        Subject to these Terms, we grant you a personal, non-exclusive,
        non-transferable, revocable license to use the Service for creating your
        own designs. You may not:
      </p>
      <ul>
        <li>copy, resell, sublicense, or redistribute the Service itself;</li>
        <li>
          redistribute or resell our templates or built-in assets as templates,
          assets, or stock content, whether or not you modify them first;
        </li>
        <li>
          reverse engineer, decompile, or attempt to extract the source code,
          except where permitted by law;
        </li>
        <li>
          share one account between multiple people, or resell access to your
          account;
        </li>
        <li>
          use the Service to create content that is illegal, infringing, harmful,
          deceptive, or that violates the rights of others;
        </li>
        <li>
          use automated means to access the Service, circumvent usage
          allowances, or interfere with its integrity or performance.
        </li>
      </ul>

      <h2>7. Your content</h2>
      <p>
        You retain all rights to the designs, text, and images you create or
        upload (&ldquo;Your Content&rdquo;). We do not claim ownership of it and
        we do not use it to train AI models.
      </p>
      <p>
        To run the Service, you grant us a limited, worldwide, royalty-free
        license to host, store, copy, transmit, and display Your Content solely
        for the purposes of operating and supporting the Service for you — for
        example, storing your projects, syncing them between your devices,
        generating previews, and producing your exports. This license ends when
        you delete the content or your account, except for backups that expire on
        their normal schedule.
      </p>
      <p>
        You are responsible for ensuring you have the rights to any images,
        fonts, or other materials you upload. For security reasons, Modo does not
        accept SVG uploads.
      </p>
      <p>
        <strong>Backups are your responsibility too.</strong> We take reasonable
        care of your data but do not guarantee against loss. You can export any
        project as a <strong>.modo</strong> file at any time; we recommend you
        keep your own copies of work that matters.
      </p>

      <h2>8. Our intellectual property</h2>
      <p>
        The Service, including its software, design, templates, built-in assets,
        and the &ldquo;Modo&rdquo; name and logo, is owned by Modo Design or its
        licensors and is protected by intellectual property laws. You may use the
        templates and assets inside the designs you create; nothing in these
        Terms transfers ownership of them to you.
      </p>

      <h2>9. Availability</h2>
      <p>
        We aim to keep the Service running but do not promise uninterrupted
        availability. We may change, suspend, or discontinue features, and we
        perform maintenance that can make the Service temporarily unavailable.
        Signing in for the first time on a device requires a connection. If we
        discontinue the Service entirely, we will give reasonable notice so you
        can export your projects.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, whether express or
        implied, to the maximum extent permitted by law. We do not warrant that
        the Service will be uninterrupted, error-free, secure, or that it will
        meet your specific requirements, nor that AI output will be accurate or
        fit for your purpose.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Modo Design will not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or for any loss of data, profits, or goodwill, arising from your
        use of or inability to use the Service. Our total liability for any claim
        relating to the Service will not exceed the amount you paid us in the
        twelve months preceding the claim. Nothing here excludes liability that
        cannot be excluded under applicable law, including under Brazilian
        consumer law.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using the Service at any time, cancel your subscription from
        your account, and delete your account. Deleting your account removes your
        projects and uploads as described in our{" "}
        <a href="/privacy">Privacy Policy</a>; export anything you want to keep
        first.
      </p>
      <p>
        We may suspend or terminate your access if you breach these Terms or use
        the Service unlawfully. Where the breach is not serious and can be fixed,
        we will try to contact you first. Provisions that by their nature should
        survive termination will survive.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date above, and for material changes we
        will notify subscribers by email before the change takes effect.
        Continued use of the Service after that constitutes acceptance of the
        updated Terms.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Federative Republic of
        Brazil, without regard to conflict-of-law rules. Disputes will be subject
        to the competent courts of Brazil, except where mandatory
        consumer-protection law provides otherwise.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>.
      </p>
    </LegalPage>
  );
}
