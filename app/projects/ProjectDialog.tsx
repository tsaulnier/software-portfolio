import { Project } from "@/types/project";

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* dialog */}
      <div className="relative z-10 max-w-lg w-full bg-background border p-6 rounded-lg">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="mt-2 text-sm opacity-80">
          {project.description}
        </p>

        {/* full tag list */}
        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          {project.tags.map(tag => (
            <span key={tag} className="border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        {/* actions */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="border px-3 py-1 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
