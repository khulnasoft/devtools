/**
 * Common types shared across UI components
 */

/** Base size variants for components */
export type Size = 'small' | 'medium' | 'large';

/** Common type variants for components */
export type Type = 'default' | 'primary' | 'warning' | 'error';

/** Common variant styles */
export type Variant = 'basic' | 'text';

/** Label position options */
export type LabelPosition = 'top' | 'left';

/** Label alignment options */
export type LabelAlign = 'left' | 'right';

/** Input type options */
export type InputType = 'text' | 'password';

/** Base component props interface */
export interface BaseComponentProps {
  /** Whether the component is disabled */
  disabled?: boolean
  /** Test ID for testing purposes */
  testId?: string
}

/** Base input component props */
export interface BaseInputProps extends BaseComponentProps {
  /** Current value */
  value?: string
  /** Placeholder text */
  placeholder?: string
  /** Whether the input is readonly */
  readonly?: boolean
  /** Whether the input is clearable */
  clearable?: boolean
}
