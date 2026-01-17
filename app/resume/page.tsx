export default function Resume() {
  return (
    <div className="pt-13">
      <main style={{ height: "100vh", width: "100%" }}>

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
    </div>
  );
}

