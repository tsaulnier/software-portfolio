import { Project } from "@/app/projects/types/project";

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectDialog({
  project,
  onClose,
}: ProjectDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* surface */}
      <div style={{ backgroundColor: "rgb(var(--ui-surface))" }}
        className="
          relative z-10 w-full max-w-xl
          rounded-2xl border border-ui-border
          bg-ui-surface text-ui-text
          p-7 shadow-xl
        "
      >
        {/* title */}
        <h2 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h2>

        {/* description */}
        <p className="mt-3 text-sm leading-6 text-ui-muted">
          {project.description}
        </p>

        {/* tags */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md border border-ui-border
                px-2 py-0.5
                text-ui-muted
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* actions */}
        <div className="mt-7 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="
              rounded-md border border-ui-border
              px-3 py-1 text-sm
              hover:bg-ui-border/20
              transition-colors
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}