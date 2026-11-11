import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";
import { LTD_PRICE, REFUND_DAYS } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Modo",
  description:
    "The terms and conditions for using Modo, the browser-based design editor sold as a lifetime license.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="November 10, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of Modo, a browser-based design editor (the &ldquo;Service&rdquo;),
        operated by <strong>Igor Soares Pinto</strong>, an individual based in
        Brazil, trading as <strong>Modo Design</strong> (&ldquo;Modo&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By buying or
        activating a license or using the Service, you agree to be bound by
        these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        Modo is a design tool that runs in your web browser. It lets you create
        graphics for social media and marketing using templates, text, images,
        assets, layers, AI generation, and export tools.
      </p>
      <p>
        Modo <strong>runs on your device</strong>. Your projects and uploaded
        images are stored in your browser, not on our servers, and there are no
        accounts. Once loaded, the editor works offline. Work does not move
        between devices or browsers by itself — you move it with project files
        or a backup.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old, or old enough to enter into a binding
        contract where you live and have permission from a parent or guardian.
      </p>

      <h2>3. Your license</h2>
      <p>
        Modo is sold as a <strong>lifetime license for a one-time payment</strong>{" "}
        (currently {LTD_PRICE} when bought directly). There is no subscription
        and nothing renews. &ldquo;Lifetime&rdquo; means for as long as Modo is
        offered, and it includes the updates we release during that time.
      </p>
      <p>
        A license is <strong>personal</strong>: it is for one person, who may
        activate it on all of their own devices and browsers. You may not share
        your key with other people, publish it, or resell it.
      </p>
      <p>
        Your license key is verified on your device. When online, the app also
        checks with us, at most once a day, that the license was not refunded or
        charged back; a license that was is deactivated.
      </p>
      <p>
        <strong>Direct purchases</strong> are processed by{" "}
        <strong>Paddle</strong>, our authorized reseller and{" "}
        <strong>Merchant of Record</strong>. Your contract for the sale is with
        Paddle, and Paddle&rsquo;s buyer terms also apply. Paddle handles
        billing, payment, taxes (such as VAT/sales tax where applicable), and
        refunds on our behalf — see the{" "}
        <a href="https://www.paddle.com/legal/checkout-buyer-terms">
          Paddle Checkout Buyer Terms
        </a>
        . <strong>Marketplace purchases</strong> (such as AppSumo) are governed
        by the marketplace&rsquo;s terms as well as these.
      </p>
      <p>
        Direct purchases can be refunded within {REFUND_DAYS} days, no questions
        asked — see our <a href="/refund">Refund Policy</a>.
      </p>

      <h2>4. AI generation</h2>
      <p>
        Modo can generate a design from a short brief you write. AI generation
        runs on <strong>your own Anthropic account</strong>: you enter your own
        Anthropic API key in the app, your browser sends the brief directly to
        Anthropic, and Anthropic bills you for that usage. Your use of
        Anthropic&rsquo;s API is governed by your agreement with Anthropic. The
        license price does not include AI usage.
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
          template&rsquo;s original design. Anthropic may still charge you for a
          request whose result you discard.
        </li>
      </ul>

      <h2>5. License to use Modo</h2>
      <p>
        Subject to these Terms, we grant you a personal, non-exclusive,
        non-transferable license to use the Service for creating your own
        designs, revocable only as described in sections 3 and 11. You may not:
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
          share your license key with other people, or resell access to it;
        </li>
        <li>
          circumvent or tamper with license verification;
        </li>
        <li>
          use the Service to create content that is illegal, infringing, harmful,
          deceptive, or that violates the rights of others.
        </li>
      </ul>

      <h2>6. Your content</h2>
      <p>
        You retain all rights to the designs, text, and images you create or
        upload (&ldquo;Your Content&rdquo;). Your Content stays on your device;
        we do not receive it, claim ownership of it, or use it to train AI
        models.
      </p>
      <p>
        You are responsible for ensuring you have the rights to any images,
        fonts, or other materials you upload.
      </p>
      <p>
        <strong>Backups are your responsibility.</strong> Because your work
        lives only in your browser, clearing its site data, resetting or losing
        the device, or a browser removing stored data deletes it, and we cannot
        recover it. Export project files or back everything up from the
        app&rsquo;s settings regularly.
      </p>

      <h2>7. Our intellectual property</h2>
      <p>
        The Service, including its software, design, templates, built-in assets,
        and the &ldquo;Modo&rdquo; name and logo, is owned by Modo Design or its
        licensors and is protected by intellectual property laws. You may use the
        templates and assets inside the designs you create; nothing in these
        Terms transfers ownership of them to you.
      </p>

      <h2>8. Availability and updates</h2>
      <p>
        We aim to keep the Service available but do not promise uninterrupted
        availability. Loading the app for the first time on a device, activating
        a license, and AI generation need a connection. We may change, improve or
        remove features in updates. If we ever discontinue Modo, we will give
        reasonable notice so you can export your work; the license check fails
        open, so the copy of the app already in your browser is not locked by us
        going away.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, whether express or
        implied, to the maximum extent permitted by law. We do not warrant that
        the Service will be uninterrupted, error-free, secure, or that it will
        meet your specific requirements, nor that AI output will be accurate or
        fit for your purpose.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Modo Design will not be liable
        for any indirect, incidental, special, consequential, or punitive
        damages, or for any loss of data, profits, or goodwill, arising from your
        use of or inability to use the Service. Our total liability for any claim
        relating to the Service will not exceed the amount you paid for your
        license. Nothing here excludes liability that
        cannot be excluded under applicable law, including under Brazilian
        consumer law.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the Service at any time. Removing the license from a
        device, or clearing your browser data, does not delete anything on our
        side; ask us if you want your license record removed.
      </p>
      <p>
        We may deactivate a license that was refunded or charged back, or whose
        key was shared publicly or obtained fraudulently, and we may suspend
        access if you otherwise breach these Terms or use the Service unlawfully.
        Where the breach is not serious and can be fixed, we will try to contact
        you first. Provisions that by their nature should survive termination
        will survive.
      </p>

      <h2>12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date above, and for material changes we
        will notify direct buyers by email before the change takes effect.
        Continued use of the Service after that constitutes acceptance of the
        updated Terms. Changes never take away the lifetime license you already
        paid for.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Federative Republic of
        Brazil, without regard to conflict-of-law rules. Disputes will be subject
        to the competent courts of Brazil, except where mandatory
        consumer-protection law provides otherwise.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a>.
      </p>
    </LegalPage>
  );
}
