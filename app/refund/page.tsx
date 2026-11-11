import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";
import { LTD_PRICE, REFUND_DAYS } from "../lib/site";

export const metadata: Metadata = {
  title: "Refund Policy — Modo",
  description: `Modo's refund policy for the lifetime license: a one-time payment with a ${REFUND_DAYS}-day, no-questions-asked refund.`,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="November 10, 2026">
      <p>
        This Refund Policy applies to the <strong>Modo lifetime license</strong>,
        sold by <strong>Igor Soares Pinto</strong>, an individual based in
        Brazil, trading as <strong>Modo Design</strong> (&ldquo;Modo&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). It explains when money comes back
        and what your rights are regardless of this policy.
      </p>

      <h2>1. One payment, no subscription</h2>
      <p>
        A Modo license costs <strong>{LTD_PRICE}, once</strong>. There is nothing
        that renews, so there is nothing to cancel: you are never charged again
        for the license you bought.
      </p>

      <h2>2. {REFUND_DAYS}-day refund, no questions asked</h2>
      <p>
        If Modo isn&rsquo;t right for you, ask for a refund within{" "}
        <strong>{REFUND_DAYS} days of purchase</strong> and you get the full
        amount back. You don&rsquo;t need to give a reason.
      </p>
      <p>
        When a refund is issued, the license is deactivated: Modo locks again on
        the devices where it was activated the next time they go online. Your
        designs are not deleted — they stay in your browser, and you can export
        them before or after the refund.
      </p>

      <h2>3. After {REFUND_DAYS} days</h2>
      <p>
        After the refund window we do not offer discretionary refunds. We still
        refund you, at any time, if:
      </p>
      <ul>
        <li>
          you were <strong>charged more than once</strong> for the same license;
        </li>
        <li>
          you paid but <strong>never received a working license key</strong>,
          and we cannot fix it; or
        </li>
        <li>
          a <strong>defect on our side</strong> makes Modo substantially unusable
          and we cannot fix it within a reasonable time.
        </li>
      </ul>

      <h2>4. Bought on AppSumo or another marketplace?</h2>
      <p>
        Purchases made through <strong>AppSumo</strong> or another marketplace
        are refunded by that marketplace, under its own policy and time limit —
        request it from them. When the marketplace tells us a license was
        refunded, it is deactivated the same way as described in section 2.
      </p>

      <h2>5. Your statutory rights</h2>
      <p>
        Nothing in this policy limits rights you have under law that cannot be
        waived. In particular:
      </p>
      <ul>
        <li>
          <strong>Brazil</strong> — under article 49 of the Código de Defesa do
          Consumidor, consumers who purchase remotely may withdraw within{" "}
          <strong>7 days</strong> of the contract and receive a full refund.
        </li>
        <li>
          <strong>European Union and United Kingdom</strong> — consumers
          generally have a <strong>14-day</strong> right of withdrawal for
          distance contracts, subject to the rules on digital content supplied
          immediately.
        </li>
        <li>
          Other jurisdictions may give you equivalent rights, and those apply
          too.
        </li>
      </ul>
      <p>
        Our {REFUND_DAYS}-day window already covers these in most cases. If you
        are entitled to more, tell us and we will honour it.
      </p>

      <h2>6. Merchant of Record</h2>
      <p>
        Direct purchases are processed by <strong>Paddle</strong>, our
        authorized reseller and <strong>Merchant of Record</strong>. Paddle is
        responsible for billing and for issuing refunds. When you request a
        refund from us, we coordinate with Paddle to process it, and
        Paddle&rsquo;s{" "}
        <a href="https://www.paddle.com/legal/checkout-buyer-terms">
          buyer terms
        </a>{" "}
        also apply.
      </p>

      <h2>7. How to request a refund</h2>
      <p>
        Email us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> from the
        address you used at checkout, or use the receipt email Paddle sent you,
        which lets you contact Paddle support directly.
      </p>
      <p>
        Approved refunds are returned to your original payment method. Processing
        times depend on your bank or card provider, typically within 5–10
        business days after the refund is issued.
      </p>

      <h2>8. Abuse</h2>
      <p>
        We may decline a request in cases of evident abuse — for example,
        repeated buy-and-refund cycles, or violations of our{" "}
        <a href="/terms">Terms of Service</a>. This never overrides the statutory
        rights in section 5.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about a charge or a refund? Reach us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> and
        we&rsquo;ll help.
      </p>
    </LegalPage>
  );
}
