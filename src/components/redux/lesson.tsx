import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function LessonRedux({ title, duration, onPlay, isCurrent = false }: LessonProps) {
  return (
    <button onClick={onPlay} data-active={isCurrent} disabled={isCurrent} className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100">
      <Video className="size-4 data-[active=true]:text-emerald-400" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  );
}