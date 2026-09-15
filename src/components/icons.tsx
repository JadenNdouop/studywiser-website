import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(paths: React.ReactNode) {
  return function Icon({ size = 22, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

export const IconUsers = base(
  <>
    <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
    <circle cx="10" cy="7" r="4" />
    <path d="M23 20v-1a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
);

export const IconCalendar = base(
  <>
    <rect x="3" y="4.5" width="18" height="16" rx="3" />
    <path d="M8 2.5v4M16 2.5v4M3 9.5h18" />
  </>,
);

export const IconLaptop = base(
  <>
    <rect x="4" y="4" width="16" height="10.5" rx="2" />
    <path d="M2 19.5h20" />
  </>,
);

export const IconChart = base(
  <>
    <path d="M4 19.5V10M11 19.5V4M18 19.5v-7" />
    <path d="M2.5 19.5h19" />
  </>,
);

export const IconShield = base(
  <path d="M12 3 4 6v6c0 4.5 3.2 7.5 8 9 4.8-1.5 8-4.5 8-9V6l-8-3Z" />,
);

export const IconChat = base(
  <path d="M21 12a8 8 0 1 1-3.6-6.66L21 4l-1.2 3.9A7.96 7.96 0 0 1 21 12Z" />,
);

export const IconClock = base(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </>,
);

export const IconTarget = base(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </>,
);

export const IconBook = base(
  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17ZM4 19.5A2.5 2.5 0 0 1 6.5 17H20" />,
);

export const IconSparkle = base(
  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />,
);

export const IconCheck = base(<path d="M20 6 9 17l-5-5" />);

export const IconMapPin = base(
  <>
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </>,
);

export const IconFlask = base(
  <path d="M9 2h6M10 2v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 8.5V2M7 15h10" />,
);

export const IconPalette = base(
  <path d="M12 2a10 10 0 1 0 0 20c1.4 0 2-1 2-2 0-.6-.3-1-.6-1.4-.3-.4-.6-.8-.6-1.4 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4c0-5-4.5-9.5-9-9.5Z M7 13a1.3 1.3 0 1 0 0-2.6A1.3 1.3 0 0 0 7 13ZM8.5 8.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM13.5 7a1.3 1.3 0 1 0 0-2.6A1.3 1.3 0 0 0 13.5 7Z" />,
);

export const IconChevronDown = base(<path d="M6 9l6 6 6-6" />);

export const IconGlobe = base(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </>,
);

export const IconStar = base(
  <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z" />,
);
