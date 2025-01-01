## API Report File for "@devtools/core-components"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

// @public
export function mockBreakpoint(options: { matches: boolean }): void;

// @public
export function mockBreakpoint(options: {
  initialBreakpoint?: Breakpoint;
  queryBreakpointMap?: Record<string, Breakpoint>;
}): {
  set(value: string): void;
  remove(): void;
};

// (No @packageDocumentation comment for this package)
```