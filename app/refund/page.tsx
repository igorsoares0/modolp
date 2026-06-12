import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy — Modo",
  description: "Modo's refund and cancellation policy for purchases made through Paddle.",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="June 11, 2026">
      <p>
        This Refund Policy applies to purchases of Modo, the browser-based design
        editor operated by <strong>Igor Soares Pinto</strong>, an individual
        based in Brazil, trading as <strong>Modo Design</strong>
        (&ldquo;Modo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). We want you to
        be happy with your purchase, and this policy explains when and how you
        can request a refund.
      </p>

      <h2>1. Merchant of Record</h2>
      <p>
        Payments for Modo are processed by <strong>Paddle</strong>, our
        authorized reseller and <strong>Merchant of Record</strong>. This means
        Paddle is responsible for billing and for issuing refunds. When you
        request a refund from us, we coordinate with Paddle to process it, and
        Paddle&rsquo;s buyer terms also apply.
      </p>

      <h2>2. 14-day money-back guarantee</h2>
      <p>
        Modo&rsquo;s paid plan (&ldquo;Pro — Lifetime&rdquo;) is a one-time
        purchase of a digital product. You may request a full refund within{" "}
        <strong>14 days</strong> of your purchase, for any reason. After 14 days,
        purchases are generally non-refundable, except where required by
        applicable consumer-protection law.
      </p>

      <h2>3. How to request a refund</h2>
      <p>To request a refund, you can either:</p>
      <ul>
        <li>
          email us at{" "}
          <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> with the
          email address used at checkout and your order details; or
        </li>
        <li>
          use the receipt email sent by Paddle after your purchase, which
          includes options to contact Paddle support.
        </li>
      </ul>
      <p>
        Approved refunds are returned to your original payment method. Processing
        times depend on your bank or card provider, typically within 5–10
        business days after the refund is issued.
      </p>

      <h2>4. The free plan</h2>
      <p>
        Modo&rsquo;s Free plan costs nothing and requires no payment, so there is
        nothing to refund or cancel. You can stop using it at any time.
      </p>

      <h2>5. Exceptions</h2>
      <p>
        We may decline a refund request in cases of evident abuse — for example,
        repeated purchase-and-refund cycles or violations of our{" "}
        <a href="/terms">Terms of Service</a>. Nothing in this policy limits any
        non-waivable rights you may have under Brazilian consumer law (Código de
        Defesa do Consumidor) or other applicable law.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about a refund? Reach us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> and
        we&rsquo;ll help.
      </p>
    </LegalPage>
  );
}
