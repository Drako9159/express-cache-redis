export const sleep = (interval: number) => {
  return new Promise((resolve: any) => setTimeout(resolve, interval));
};
