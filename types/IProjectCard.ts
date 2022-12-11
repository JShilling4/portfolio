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
  } | null;
  sourceCodeUrl: string;
  demoUrl: string;
  technology: string[];
}
