"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/img/placeholder-vehicle.jpg",
  width,
  height,
  fill,
  className,
  sizes,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const imageProps = {
    src: imgSrc,
    alt,
    onError: handleError,
    className,
    sizes,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return <Image {...imageProps} width={width || 400} height={height || 300} />;
}
