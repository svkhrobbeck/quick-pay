export interface INavLinks {
  title: string;
  path: string;
}

export interface IStatistics {
  id: number;
  title: string;
  value: string;
}

export interface IFeatures {
  id?: number;
  icon?: string;
  title: string;
  content: string;
}

export interface IFeedbacks extends IFeatures {
  name: string;
}

export interface ILinkObj {
  name: string;
  link: string;
}

export interface IFooterLinks {
  title: string;
  links: ILinkObj[];
}

export interface ISocials {
  id: string;
  link: string;
  icon: string;
}

export interface IClients {
  id: string;
  logo: string;
}
