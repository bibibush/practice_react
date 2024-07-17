const StaleTime = {
  five: 300000,
  ten: 600000,
  thirty: 300000 * 6,
} as const;
// eslint-disable-next-line
type StaleTime = (typeof StaleTime)[keyof typeof StaleTime];

export default StaleTime;
