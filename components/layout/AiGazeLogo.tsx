import Image from "next/image";

/** Approximate aspect from aigaze-logo.png (1419×488 cropped lockup). */
const LOGO_ASPECT = 1419 / 488;

export default function AiGazeLogo({
  className = "",
  height = 48,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/aigaze-logo.png"
      alt="AI Gaze"
      width={width}
      height={height}
      sizes={`${width}px`}
      className={className}
      priority={priority}
      style={{
        height,
        width: "auto",
        maxWidth: width,
        objectFit: "contain",
      }}
    />
  );
}
