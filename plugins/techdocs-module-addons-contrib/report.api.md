## API Report File for "@devtools/plugin-techdocs-module-addons-contrib"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { DevtoolsPlugin } from '@devtools/core-plugin-api';

// @public
export const ExpandableNavigation: () => JSX.Element | null;

// @public
export const LightBox: () => JSX.Element | null;

// @public
export const ReportIssue: (props: ReportIssueProps) => JSX.Element | null;

// @public
export type ReportIssueProps = {
  debounceTime?: number;
  templateBuilder?: ReportIssueTemplateBuilder;
};

// @public
export type ReportIssueTemplate = {
  title: string;
  body: string;
};

// @public
export type ReportIssueTemplateBuilder = (options: {
  selection: Selection;
}) => ReportIssueTemplate;

// @public
export const techdocsModuleAddonsContribPlugin: DevtoolsPlugin<{}, {}>;

// @public
export const TextSize: () => JSX.Element | null;
```