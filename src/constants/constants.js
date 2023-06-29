import { send } from "vite";
import { shield, star } from "../assets";

export const navLinks = [
  { title: "Bosh Sahifa", path: "home" },
  { title: "Xizmatlar", path: "services" },
  { title: "Mahsulot", path: "product" },
  { title: "Mijozlar", path: "clients" },
];

export const statistics = [
  { id: 1, title: "Foydalanuvchi Faol", value: "93K+" },
  { id: 2, title: "Kompaniya Homiyligida", value: "100+" },
  { id: 3, title: "Tranzaksiya", value: "110M+" },
];

export const features = [
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
