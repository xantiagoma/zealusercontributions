"use client";

import React, {
	type ReactNode,
	useState,
	forwardRef,
	type ComponentProps,
	PropsWithChildren,
} from "react";

/**
 * We extend `<img>`'s properties as we want our
 * component to act as a drop-in replacement for it
 */
type ImgProps = ComponentProps<"img"> & {
	/**
	 * Optional fallback to render in place of a missing image
	 * @default null
	 */
	fallback?: ReactNode;
	/**
	 * Force the fallback to be rendered if the src is not set
	 * @default false
	 */
	forceFallbackIfNotSrc?: boolean;
};

const Img = forwardRef<HTMLImageElement, ImgProps>(
	({ fallback = null, forceFallbackIfNotSrc, onError, ...props }, ref) => {
		/**
		 * is our image broken?
		 */
		const [isBroken, setIsBroken] = useState(false);

		const handleError: ImgProps["onError"] = (e) => {
			setIsBroken(true);
			onError?.(e);
		};

		if (isBroken || (forceFallbackIfNotSrc && !props.src)) {
			return <>{fallback}</>;
		}

		// biome-ignore lint/a11y/useAltText: Parent should provide alt text
		return <img ref={ref} onError={handleError} {...props} />;
	},
);

Img.displayName = "Img";

export default Img;
