export interface CLabelProps {
  /** Label text */
  label?: string
  /** ID of the form element this label is for */
  labelFor?: string
  /** Position of the label relative to the content */
  labelPosition?: 'top' | 'left'
  /** Width of the label when positioned to the left */
  labelWidth?: string
  /** Alignment of the label text */
  labelAlign?: 'left' | 'right' | 'center'
}
