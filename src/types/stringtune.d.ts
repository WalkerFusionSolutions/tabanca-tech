// Extend React's HTML attribute types with StringTune declarative API
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    string?: string;
    'string-parallax-speed'?: string | number;
    'string-parallax-direction'?: string;
    'string-progress-offset'?: string | number;
    'string-lerp-y-strength'?: string | number;
    'string-lerp-x-strength'?: string | number;
    'string-split-type'?: string;
    'string-3d'?: string;
    'string-3d-model'?: string;
  }
}
