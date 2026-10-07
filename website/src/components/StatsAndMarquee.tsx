import { StatCounter } from "./StatCounter";
import { LogoMarquee } from "./LogoMarquee";

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface PartnerLogo {
  name: string;
  url: string;
}

interface StatsAndMarqueeProps {
  stats?: Stat[];
  logos?: PartnerLogo[];
  title?: string;
  marqueeSpeed?: number;
}

const DEFAULT_STATS: Stat[] = [
  { label: "Labs Established", value: 50, suffix: "+" },
  { label: "Aircraft Concepts", value: 15, suffix: "+" },
  { label: "Team Members", value: 30, suffix: "+" },
  { label: "Years of Experience", value: 8, suffix: "+" },
];

const DEFAULT_LOGOS: PartnerLogo[] = [
  { name: "Partner 1", url: "https://via.placeholder.com/150x50?text=Partner+1" },
  { name: "Partner 2", url: "https://via.placeholder.com/150x50?text=Partner+2" },
  { name: "Partner 3", url: "https://via.placeholder.com/150x50?text=Partner+3" },
  { name: "Partner 4", url: "https://via.placeholder.com/150x50?text=Partner+4" },
  { name: "Partner 5", url: "https://via.placeholder.com/150x50?text=Partner+5" },
  { name: "Partner 6", url: "https://via.placeholder.com/150x50?text=Partner+6" },
];

export function StatsAndMarquee({
  stats = DEFAULT_STATS,
  logos = DEFAULT_LOGOS,
  title = "Trusted by Industry Leaders",
  marqueeSpeed = 30,
}: StatsAndMarqueeProps) {
  return (
    <section className="w-full bg-navy">
      {/* Stats Row */}
      <div className="px-6 py-16 sm:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                end={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
