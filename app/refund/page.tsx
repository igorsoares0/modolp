import type { Metadata } from "next";
import { LegalPage } from "../components/legal/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy — Modo",
  description:
    "Modo's cancellation and refund policy for the Pro subscription, billed through Paddle.",
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" updated="August 7, 2026">
      <p>
        This Refund Policy applies to the <strong>Modo Pro</strong> subscription,
        sold by <strong>Igor Soares Pinto</strong>, an individual based in
        Brazil, trading as <strong>Modo Design</strong> (&ldquo;Modo&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). It explains how cancellation works,
        when money comes back, and what your rights are regardless of this
        policy.
      </p>

      <h2>1. Try it before you pay</h2>
      <p>
        Modo&rsquo;s <strong>Free plan is not a trial</strong> — it is the real
        editor, with unlimited projects, watermark-free exports, every canvas
        format, and a monthly allowance of AI generations, with no credit card
        required. We built it that way so you can find out whether Modo works for
        you before any money changes hands. Please use it first.
      </p>

      <h2>2. Cancel any time</h2>
      <p>
        Pro is a monthly subscription that renews automatically until you cancel.
        You can cancel at any time from your account. When you cancel:
      </p>
      <ul>
        <li>you are not charged again;</li>
        <li>
          you keep Pro until the end of the period you have already paid for;
        </li>
        <li>
          after that your account moves to the Free plan — your projects and
          uploads stay, subject to the Free plan&rsquo;s storage cap.
        </li>
      </ul>

      <h2>3. Refunds for periods already paid</h2>
      <p>
        Because the Free plan lets you evaluate Modo fully before subscribing,{" "}
        <strong>
          we do not offer discretionary refunds for subscription periods that
          have already started
        </strong>
        , and we do not refund partial or unused months. Cancelling stops future
        charges rather than reversing past ones.
      </p>
      <p>
        This does not apply to the situations in sections 4 and 5, where you do
        get your money back.
      </p>

      <h2>4. When we do refund</h2>
      <p>We will always refund you if:</p>
      <ul>
        <li>
          you were <strong>charged more than once</strong> for the same period,
          or charged after a valid cancellation;
        </li>
        <li>
          you paid for Pro but{" "}
          <strong>never received access</strong> to the Pro features, and we
          cannot fix it;
        </li>
        <li>
          a <strong>technical fault on our side</strong> made the Service
          substantially unusable for a significant part of a period you paid for;
          or
        </li>
        <li>
          we discontinue the Service or materially remove a feature you were
          paying for, mid-period.
        </li>
      </ul>

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
          distance contracts, subject to the rules on digital services that begin
          immediately.
        </li>
        <li>
          Other jurisdictions may give you equivalent rights, and those apply
          too.
        </li>
      </ul>
      <p>
        If you are entitled to one of these, tell us and we will honour it — you
        do not need to argue the point with us.
      </p>

      <h2>6. Merchant of Record</h2>
      <p>
        Payments for Modo are processed by <strong>Paddle</strong>, our
        authorized reseller and <strong>Merchant of Record</strong>. Paddle is
        responsible for billing and for issuing refunds. When you request a
        refund from us, we coordinate with Paddle to process it, and
        Paddle&rsquo;s{" "}
        <a href="https://www.paddle.com/legal/checkout-buyer-terms">
          buyer terms
        </a>{" "}
        also apply.
      </p>

      <h2>7. How to cancel or request a refund</h2>
      <p>
        <strong>To cancel:</strong> open your account settings in Modo and cancel
        the subscription. It takes effect at the end of the current period.
      </p>
      <p>
        <strong>To request a refund:</strong> email us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> from the
        address you used at checkout, telling us what happened. You can also use
        the receipt email Paddle sent you, which includes options to contact
        Paddle support directly.
      </p>
      <p>
        Approved refunds are returned to your original payment method. Processing
        times depend on your bank or card provider, typically within 5–10
        business days after the refund is issued.
      </p>

      <h2>8. The free plan</h2>
      <p>
        The Free plan costs nothing and requires no payment, so there is nothing
        to refund or cancel. You can stop using it at any time, and you can
        delete your account and data from your settings.
      </p>

      <h2>9. Abuse</h2>
      <p>
        We may decline a request in cases of evident abuse — for example,
        repeated subscribe-and-refund cycles, or violations of our{" "}
        <a href="/terms">Terms of Service</a>. This never overrides the statutory
        rights in section 5.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about a charge, a cancellation, or a refund? Reach us at{" "}
        <a href="mailto:contact@getmodo.pro">contact@getmodo.pro</a> and
        we&rsquo;ll help.
      </p>
    </LegalPage>
  );
}
