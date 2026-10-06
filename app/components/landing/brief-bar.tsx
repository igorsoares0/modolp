import { SIGNUP_URL } from "../../lib/site";

/**
 * The editor's AI bar, as a try-it field. A plain GET form to the signup page,
 * so it works without JS.
 *
 * The brief rides along as `?brief=`, but the app doesn't read it yet — it
 * would have to survive the login redirect and email verification first (see
 * dsgntool docs/landing-page-spec.md §0). Until then this degrades to a signup
 * link, so nothing on the page may promise the brief reaches the editor.
 */
export function BriefBar() {
  return (
    <form
      action={SIGNUP_URL}
      method="get"
      target="_blank"
      className="flex h-14 w-full max-w-[600px] items-stretch border border-border-strong bg-surface-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-selection"
    >
      <span className="flex items-center bg-ai px-3 font-wide text-[13px] font-black tracking-[0.06em] text-ai-fg sm:px-4">
        BRIEF
      </span>
      <label className="sr-only" htmlFor="brief">
        Describe the post you need
      </label>
      <input
        id="brief"
        name="brief"
        type="text"
        autoComplete="off"
        maxLength={280}
        placeholder="An opening-day post for my bakery, warm and simple"
        className="min-w-0 flex-1 bg-transparent px-3 text-[15px] text-text-primary outline-none placeholder:text-text-tertiary sm:px-4"
      />
      <button
        type="submit"
        className="flex items-center bg-surface-inverse px-4 text-[14px] font-bold text-text-inverse transition-opacity duration-150 ease-standard hover:opacity-90 sm:px-5"
      >
        <span className="hidden sm:inline">Try it&nbsp;</span>→
      </button>
    </form>
  );
}
