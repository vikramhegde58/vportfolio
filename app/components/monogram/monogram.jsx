import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d="M 8.734 24.896 L 1 3.5140000000000002 L 8.267 3.5140000000000002 L 15.663 24.896 L 8.734 24.896 Z M 16.533 24.251 L 13.327 14.841 L 16.775 3.5140000000000002 L 23.929 3.5140000000000002 L 16.533 24.251 Z M 39.721 24.896 L 39.721 16.211 L 34.435 16.211 L 34.435 11.925 L 39.672 11.925 L 39.672 3.5140000000000002 L 46.859 3.5140000000000002 L 46.859 24.896 L 39.721 24.896 Z M 26.185 24.896 L 26.185 3.5140000000000002 L 33.307 3.5140000000000002 L 33.307 24.896 L 26.185 24.896 Z"
            transform="matrix(1.0000040531158447, 0.001910999999381602, 0.001405000104568899, 0.9999989867210389, -0.021695001050829887, -0.04702500253915787)"
            style={{
              fillRule: 'evenodd',
              strokeOpacity: 0.56,
              textTransform: 'uppercase',
              paintOrder: 'fill',
              fill: 'rgb(255, 255, 255)',
            }}
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
