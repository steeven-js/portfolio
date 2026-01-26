export type PricingCardProps = {
  license: string;
  price: string;
  caption?: string;
  options: {
    title: string;
    tootip?: string;
    disabled: boolean;
  }[];
};
