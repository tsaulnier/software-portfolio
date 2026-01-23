export type RawResumeData = {
  name: string;
  contact: Array<
    | string
    | {
        label?: string;
        text: string;
        href: string;
      }
  >;
  sections: RawSection[];
};

export type RawSection =
  | {
      type: "paragraph";
      title: string;
      content: string;
    }
  | {
      type: "entries";
      title: string;
      entries: {
        title: string;
        institution?: string;
        right?: string;
        note?: string;
      }[];
    }
  | {
      type: "experience";
      title: string;
      items: {
        role: string;
        dates: string;
        company: string;
        location?: string;
        bullets: string[];
      }[];
    };
