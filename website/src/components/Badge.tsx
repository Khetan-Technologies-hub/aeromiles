import { ReactNode } from "react";

type BadgeVariant =
  | "navy"
  | "blue"
  | "blue-light"
  | "saffron"
  | "green"
  | "slate"
  | "success"
  | "warning"
  | "error"
  | "outline";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  /** Whether to show as a dot indicator instead of filled */
  dot?: boolean;
  /** Custom icon before text */
  icon?: ReactNode;
}

const variantMap: Record<BadgeVariant, string> = {
  navy: "bg-navy text-white",
  blue: "bg-blue text-white",
  "blue-light": "bg-blue/15 text-blue-700 border border-blue/30",
  saffron: "bg-saffron/15 text-navy border border-saffron/50",
  green: "bg-green/15 text-navy border border-green/50",
  slate: "bg-slate/15 text-slate border border-slate/30",
  success: "bg-green/15 text-green border border-green/50",
  warning: "bg-saffron/15 text-navy border border-saffron/50",
  error: "bg-red/15 text-red-700 border border-red/30",
  outline: "bg-transparent text-navy border border-line",
};

const sizeMap: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

export function Badge({
  children,
  variant = "navy",
  size = "md",
  className = "",
  dot = false,
  icon,
}: BadgeProps) {
  if (dot) {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${variantMap[variant].replace("bg-", "bg-").replace("text-", "").split(" ")[0]}`} aria-hidden />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy">
          {children}
        </span>
      </span>
    );
  }

  return (
    <span className={[
      "inline-flex",
      "items-center",
      "gap-1.5",
      "font-bold",
      "uppercase",
      "tracking-[0.15em]",
      "rounded-full",
      "border",
      variantMap[variant],
      sizeMap[size],
      className,
    ].join(" ")}>
      {icon && <span className="flex-shrink-0" aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}

/** Category badge specifically for product/platform categories */
export function CategoryBadge({
  category,
  size = "sm",
}: {
  category: "plane" | "drone" | "defence";
  size?: BadgeSize;
}) {
  const variantMap: Record<string, BadgeVariant> = {
    plane: "blue-light",
    drone: "saffron",
    defence: "green",
  };

  const labelMap: Record<string, string> = {
    plane: "Plane",
    drone: "Drone",
    defence: "Defence",
  };

  return (
    <Badge variant={variantMap[category]} size={size}>
      {labelMap[category]}
    </Badge>
  );
}

/** Status badge for states like "Active", "In Development", etc. */
export function StatusBadge({
  status,
  size = "sm",
}: {
  status: "active" | "development" | "legacy" | "coming-soon";
  size?: BadgeSize;
}) {
  const config: Record<string, { variant: BadgeVariant; label: string }> = {
    active: { variant: "success", label: "Active" },
    development: { variant: "warning", label: "In Development" },
    legacy: { variant: "slate", label: "Legacy" },
    "coming-soon": { variant: "blue-light", label: "Coming Soon" },
  };

  const { variant, label } = config[status];
  return <Badge variant={variant} size={size}>{label}</Badge>;
}