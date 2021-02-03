module.exports = Forms = () => ({
  ".form-input": {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "--tw-border-opacity": "1",
    borderColor: "rgba(226, 232, 240, var(--tw-border-opacity))",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "block",
    fontSize: "0.875rem",
    lineHeight: ["1.25rem", 1.5],
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    "--tw-shadow": "0 0 #0000",
    boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "--tw-text-opacity": "1",
    color: "rgba(15, 23, 42, var(--tw-text-opacity))",
    width: "100%",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    minHeight: "39px",
  },
  ".form-input::-moz-placeholder": {
    "--tw-placeholder-opacity": "1",
    color: "rgba(148, 163, 184, var(--tw-placeholder-opacity))",
  },
  ".form-input:-ms-input-placeholder": {
    "--tw-placeholder-opacity": "1",
    color: "rgba(148, 163, 184, var(--tw-placeholder-opacity))",
  },
  ".form-input::placeholder": {
    "--tw-placeholder-opacity": "1",
    color: "rgba(148, 163, 184, var(--tw-placeholder-opacity))",
  },
  // Hover and Focus
  ".form-input:hover, .form-select:hover, .form-checkbox:hover, .form-radio:hover": {
    "--tw-border-opacity": "1",
    borderColor: "rgba(71, 85, 105, var(--tw-border-opacity))",
  },
  ".form-input:focus, .form-select:focus, .form-checkbox:focus, .form-radio:focus": {
    "--tw-border-opacity": "1",
    borderColor: "rgba(109, 40, 217, var(--tw-border-opacity))",
    outline: "2px solid transparent",
    outlineOffset: "2px",
  },
  // Sizes
  ".form-input-sm": {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    minHeight: "28px",
  },
  ".form-input-lg": {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    minHeight: "56px",
  },
  ".form-select-sm": {
    fontSize: "0.75rem !important",
    lineHeight: "1rem !important",
    paddingTop: "0.25rem !important",
    paddingBottom: "0.25rem !important",
    paddingLeft: "0.5rem !important",
    paddingRight: "2rem !important",
    minHeight: "28px",
  },
  ".form-select-lg": {
    fontSize: "1.25rem !important",
    lineHeight: "1.75rem !important",
    paddingTop: "0.75rem !important",
    paddingBottom: "0.75rem !important",
    paddingLeft: "1rem !important",
    paddingRight: "2.5rem !important",
    minHeight: "56px",
  },
  // Select, Checkbox, Radio
  ".form-select": {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
    backgroundRepeat: "no-repeat",
    "--tw-border-opacity": "1",
    borderColor: "rgba(226, 232, 240, var(--tw-border-opacity))",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: "pointer",
    display: "block",
    fontSize: "0.875rem",
    lineHeight: ["1.25rem", 1.5],
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "2.5rem",
    "--tw-shadow": "0 0 #0000",
    boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "--tw-text-opacity": "1",
    color: "rgba(15, 23, 42, var(--tw-text-opacity))",
    width: "100%",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    WebkitPrintColorAdjust: "exact",
    colorAdjust: "exact",
    backgroundImage:
      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e\")",
    backgroundPosition: "right 0.5rem center",
    backgroundSize: "1.5em 1.5em",
  },
  ".form-checkbox, .form-radio": {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "--tw-border-opacity": "1",
    borderColor: "rgba(226, 232, 240, var(--tw-border-opacity))",
    borderRadius: "0.25rem",
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: 0,
    height: "1rem",
    "--tw-text-opacity": "1",
    color: "rgba(109, 40, 217, var(--tw-text-opacity))",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    verticalAlign: "middle",
    width: "1rem",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    WebkitPrintColorAdjust: "exact",
    colorAdjust: "exact",
    backgroundOrigin: "border-box",
  },
  ".form-radio": { borderRadius: "9999px !important" },
  ".form-select[multiple]": {
    backgroundSize: "auto",
    height: "auto",
    paddingRight: "0.75rem",
    backgroundImage: "none",
  },
  ".form-select::-ms-expand": {
    borderStyle: "none",
    "--tw-text-opacity": "1",
    color: "rgba(100, 116, 139, var(--tw-text-opacity))",
  },
  "@media not print": {
    ".form-checkbox::-ms-check, .form-radio::-ms-check": {
      borderWidth: "1px",
      color: "transparent",
      background: "inherit",
      borderColor: "inherit",
      borderRadius: "inherit",
    },
  },
  "@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none)": {
    ".form-select": { paddingRight: "0.75rem" },
  },
  ".form-checkbox:checked, .form-radio:checked": {
    backgroundColor: "currentColor",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderColor: "transparent",
    backgroundSize: "100% 100%",
  },
  ".form-checkbox:checked": {
    backgroundImage:
      "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\")",
  },
  ".form-radio:checked": {
    backgroundImage: "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\")",
  },
  // Range
  ".form-input::-webkit-slider-runnable-track": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
    borderColor: "transparent",
    borderRadius: "0.25rem",
    cursor: "pointer",
    height: "0.5rem",
    color: "transparent",
    width: "100%",
  },
  ".form-input::-moz-range-track": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
    borderColor: "transparent",
    borderRadius: "0.25rem",
    cursor: "pointer",
    height: "0.5rem",
    color: "transparent",
    width: "100%",
  },
  ".form-input::-ms-track": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
    borderColor: "transparent",
    borderRadius: "0.25rem",
    cursor: "pointer",
    height: "0.5rem",
    color: "transparent",
    width: "100%",
  },
  ".form-input::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    appearance: "none",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(109, 40, 217, var(--tw-bg-opacity))",
    borderRadius: "0.25rem",
    borderStyle: "none",
    height: "1.5rem",
    marginTop: "-0.5rem",
    width: "1rem",
  },
  ".form-input::-moz-range-thumb": {
    MozAppearance: "none",
    appearance: "none",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(109, 40, 217, var(--tw-bg-opacity))",
    borderRadius: "0.25rem",
    borderStyle: "none",
    height: "1.5rem",
    marginTop: "-0.5rem",
    width: "1rem",
  },
  ".form-input::-ms-thumb": {
    appearance: "none",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(109, 40, 217, var(--tw-bg-opacity))",
    borderRadius: "0.25rem",
    borderStyle: "none",
    height: "1.5rem",
    marginTop: "-0.5rem",
    width: "1rem",
  },
  ".form-input::-moz-focus-outer": { borderWidth: "0px" },
  ".form-input::-ms-fill-lower": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(226, 232, 240, var(--tw-bg-opacity))",
    borderRadius: "0.25rem",
  },
  ".form-input::-ms-fill-upper": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(226, 232, 240, var(--tw-bg-opacity))",
    borderRadius: "0.25rem",
    marginRight: "0.75rem",
  },
  // Disabled
  ".form-input:disabled, .form-select:disabled, .form-checkbox:disabled, .form-radio:disabled, .form-input:disabled": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(203, 213, 225, var(--tw-bg-opacity))",
    "--tw-border-opacity": "1",
    borderColor: "rgba(203, 213, 225, var(--tw-border-opacity))",
    cursor: "not-allowed",
    opacity: 1,
  },
  // Readonly
  ".form-input[readonly]": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
    "--tw-border-opacity": "1",
    borderColor: "rgba(241, 245, 249, var(--tw-border-opacity))",
    cursor: "default",
    opacity: 1,
  },
  // Append
  ".form-append": {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    width: "100%",
  },
  ".form-append .form-input": {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    flex: "1 1 auto",
    width: "1px",
  },
  ".form-append .btn": {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    marginLeft: "-0.25rem",
  },
  // Icons
  ".form-icon": { position: "relative" },
  ".form-icon svg": {
    height: "100%",
    paddingLeft: "0.75rem",
    pointerEvents: "none",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    "--tw-text-opacity": "1",
    color: "rgba(148, 163, 184, var(--tw-text-opacity))",
    width: "2rem",
  },
  ".form-icon-r svg": {
    paddingLeft: "0px",
    paddingRight: "0.75rem",
    right: "0px",
    left: "auto",
  },
  ".form-icon .form-input, .form-icon .form-input-sm, .form-icon .form-input-lg": {
    paddingLeft: "2.5rem",
  },
  ".form-icon-r .form-input, .form-icon-r .form-input-sm, .form-icon-r .form-input-lg": {
    paddingRight: "2.5rem",
  },
  ".form-icon-r .form-input": { paddingLeft: "0.75rem" },
  ".form-icon-r .form-input-sm": { paddingLeft: "0.5rem" },
  ".form-icon-r .form-input-lg": { paddingLeft: "1rem" },
});
