export interface INavLink {
  title: string;
  path: string;
}

export interface IStat {
  id: number;
  title: string;
  value: string;
}

export interface IFeature {
  id?: number;
  icon?: string;
  title: string;
  content: string;
}

export interface IFeedback extends IFeature {
  name: string;
}

export interface ILink {
  name: string;
  link: string;
}

export interface IFooterLink {
  title: string;
  links: ILink[];
}

export interface ISocial {
  id: string;
  link: string;
  icon: string;
}

export interface IClient {
  id: string;
  logo: string;
}
