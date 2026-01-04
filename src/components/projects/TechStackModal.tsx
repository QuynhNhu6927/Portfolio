"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  techs: string[];
}

export default function TechStackModal({ open, onClose, techs }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative z-10 w-[90%] max-w-md bg-bg border border-primary/30 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-primary">
            Tech Stack
          </h3>
          <button
            onClick={onClose}
            className="text-disable hover:text-primary"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border border-primary/40 text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
