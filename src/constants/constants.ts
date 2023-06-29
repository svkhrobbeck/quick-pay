import { airbnb, binance, coinbase, dropbox, facebook, instagram, linkedin, send, shield, star, twitter } from "../assets";
import { IClients, IFeatures, IFeedbacks, IFooterLinks, INavLinks, ISocials, IStatistics } from "../interfaces";

export const navLinks: INavLinks[] = [
  { title: "Bosh Sahifa", path: "#" },
  { title: "Mahsulot", path: "#product" },
  { title: "Xizmatlar", path: "#services" },
  { title: "Mijozlar", path: "#clients" },
];

export const statistics: IStatistics[] = [
  { id: 1, title: "Foydalanuvchi Faol", value: "93K+" },
  { id: 2, title: "Kompaniya Homiyligida", value: "100+" },
  { id: 3, title: "Tranzaksiya", value: "110M+" },
];

export const features: IFeatures[] = [
  {
    id: 1,
    icon: star,
    title: "Mukofotlar",
    content: "Eng yaxshi kredit kartalari, aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qilamiz.",
  },
  {
    id: 2,
    icon: shield,
    title: "100% Himoyalangan",
    content: "Ma'lumotlaringiz va tranzaktsiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun faol choralar ko'ramiz",
  },
  {
    id: 3,
    icon: send,
    title: "Balansni o'tkazish",
    content: "Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
  },
];

export const feedbacks: IFeedbacks[] = [
  {
    id: 1,
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver",
    name: "Herman Jensen",
    title: "Founder & Leader",
  },
  {
    id: 2,
    content: "Money makes your life easier. If you're lucky to have it. you;re lucky",
    name: "Steve Mark",
    title: "Founder & Leader",
  },
  {
    id: 3,
    content: "It is usually people in the money business, finance and international trade that are really rich.",
    name: "Ken Gallagher",
    title: "Founder & Leader",
  },
];

export const footerLinks: IFooterLinks[] = [
  {
    title: "Jamiyat",
    links: [
      { name: "Yordam Markazi", link: "https://www.hoobank.com/help-center/" },
      { name: "Hamkorlar", link: "https://www.hoobank.com/partners/" },
      { name: "Takliflar", link: "https://www.hoobank.com/suggestions/" },
      { name: "Blog", link: "https://www.hoobank.com/blog/" },
      { name: "Yangiliklar", link: "https://www.hoobank.com/newsletters/" },
    ],
  },
  {
    title: "Foydali havola",
    links: [
      { name: "Kontent", link: "https://www.soatov.uz/content/" },
      { name: "Qanday ishlaydi", link: "https://www.soatov.uz/how-it-works/" },
      { name: "Shartlar & xizmatlar", link: "https://www.soatov.uz/terms-and-services/" },
    ],
  },
  {
    title: "Hamkor",
    links: [
      { name: "Bizning hamkorimiz", link: "https://www.soatov.uz/our-partners/" },
      { name: "Hamkor bo'ling", link: "https://www.soatov.uz/become-a-partner/" },
    ],
  },
];

export const socials: ISocials[] = [
  { id: "social-1", link: "https://instagram.com/", icon: instagram },
  { id: "social-2", link: "https://facebook.com/", icon: facebook },
  { id: "social-3", link: "https://twitter.com/", icon: twitter },
  { id: "social-4", link: "https://linkedin.com/", icon: linkedin },
];

export const clients: IClients[] = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];
