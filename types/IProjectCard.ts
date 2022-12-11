export interface IProjectCard {
  title: string;
  type: string;
  isActive: boolean;
  description: string;
  desktopImage: {
    filename: string;
    altText: string;
  };
  mobileImage: {
    filename: string;
    altText: string;
  };
  sourceCodeUrl: string;
  demoUrl: string;
  technology: string[];
}
