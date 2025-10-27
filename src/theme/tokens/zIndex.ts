/**
 * DGA Design System Z-Index Tokens
 * Consistent layering system
 */

export const zIndex = {
  // Base layers
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',

  // Semantic layers
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1050',
  popover: '1060',
  tooltip: '1070',
  toast: '1080',

  // Maximum layer
  max: '2147483647',
} as const;

// Component-specific z-index
export const componentZIndex = {
  // Navigation
  nav: zIndex[50],
  navDropdown: zIndex.dropdown,

  // Modals and overlays
  modal: zIndex.modal,
  modalBackdrop: zIndex.modalBackdrop,
  drawer: zIndex.modal,

  // Notifications
  toast: zIndex.toast,
  notification: zIndex.toast,

  // Interactive elements
  tooltip: zIndex.tooltip,
  popover: zIndex.popover,
  dropdown: zIndex.dropdown,

  // Fixed elements
  header: zIndex.fixed,
  sidebar: zIndex.fixed,
  footer: zIndex.sticky,
} as const;

export type ZIndex = keyof typeof zIndex;
export type ComponentZIndex = keyof typeof componentZIndex;
