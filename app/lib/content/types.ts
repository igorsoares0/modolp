/** Shapes shared by every content family under app/lib/content. */

export type ContentFaq = {
  q: string;
  a: string;
};

/** A titled paragraph — used for guidance, mistakes and "when X wins" lists. */
export type ContentNote = {
  title: string;
  body: string;
};
