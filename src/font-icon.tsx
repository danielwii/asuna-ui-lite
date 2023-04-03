import React from 'react';

export const SpinIcon = () => (
  <svg className="animate-spin -mr-1 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const OffIcon = () => (
  <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
    <path
      d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OnIcon = () => (
  <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
  </svg>
);

export const TriangleUp = ({ color = '#707070' }) => (
  <svg
    className="w-4 h-4"
    d="1627384219810"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3731"
    fill={color}
  >
    <path
      d="M499.904 270.912l-342.912 395.584a16 16 0 0 0 12.032 26.496H855.04a16 16 0 0 0 12.032-26.496l-342.912-395.52a16 16 0 0 0-24.192 0z"
      p-id="3732"
    />
  </svg>
);

export const TriangleDown = ({ color = '#707070' }) => (
  <svg
    className="w-4 h-4"
    d="1627384449838"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="5250"
    fill={color}
  >
    <path
      d="M524.096 753.088l342.912-395.584a16 16 0 0 0-12.032-26.496H169.024a16 16 0 0 0-12.032 26.496l343.04 395.52a16 16 0 0 0 24.064 0z"
      p-id="5251"
    />
  </svg>
);

export const SpinRing = ({ color = '#fff' }) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2462"
    width="16"
    height="16"
    fill={color}
  >
    <path d="M512 1024c-136.76544 0-265.33888-53.248-362.04544-149.95456s-149.95456-225.28-149.95456-362.04544c0-96.82944 27.17696-191.13984 78.60224-272.6912 49.99168-79.29856 120.66816-143.38048 204.34944-185.30304l43.008 85.83168c-68.03456 34.07872-125.50144 86.17984-166.15424 150.67136-41.73824 66.21184-63.81568 142.80704-63.81568 221.4912 0 229.376 186.61376 416.01024 416.01024 416.01024s416.01024-186.61376 416.01024-416.01024c0-78.68416-22.05696-155.27936-63.81568-221.4912-40.6528-64.49152-98.11968-116.59264-166.15424-150.67136l43.008-85.83168c83.70176 41.92256 154.35776 106.00448 204.34944 185.30304 51.42528 81.55136 78.60224 175.86176 78.60224 272.6912 0 136.76544-53.248 265.33888-149.95456 362.04544s-225.28 149.95456-362.04544 149.95456z" />
  </svg>
);
