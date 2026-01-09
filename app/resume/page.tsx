import Link from "next/link";

export default function Resume() {
  return (
    <main style={{ height: "100vh", width: "100%" }}>
      <nav style={{ padding: "0.75rem" }}>
        <Link href="/">← BACK</Link>
      </nav>

      <iframe
        src="/resume/resume.pdf"
        title="Resume"
        style={{
          width: "100%",
          height: "calc(100vh - 3rem)",
          border: "none",
          opacity: "100%",
        }}
      />
    </main>
  );
}

