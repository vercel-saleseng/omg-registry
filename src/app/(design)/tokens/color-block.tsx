import { cn } from "@/lib/utils";

interface SimpleColorBlockProps {
  name: string;
  className: string;
}

export function ColorBlock({ name, className }: SimpleColorBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={cn("size-12 rounded border", className)} />
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground text-sm">
          --{className.slice(3)}
        </div>
      </div>
    </div>
  );
}
