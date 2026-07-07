import Image from "next/image";

const LOGO_ASPECT = 426 / 77;

export default function ETLogo({
  className = "",
  height = 32,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Image
      src="/logo.png"
      alt="Elastic Tree"
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
