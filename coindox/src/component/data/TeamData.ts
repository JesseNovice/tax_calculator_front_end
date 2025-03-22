import { StaticImageData } from "next/image";

import thumb_1 from "@/assets/img/team/team_01.png"
import thumb_2 from "@/assets/img/team/team_02.png"
import thumb_3 from "@/assets/img/team/team_03.png"
import thumb_4 from "@/assets/img/team/team_04.png"

import home_3thumb_1 from "@/assets/img/team/img_01.png"
import home_3thumb_2 from "@/assets/img/team/img_02.png"
import home_3thumb_3 from "@/assets/img/team/img_03.png"
import home_3thumb_4 from "@/assets/img/team/img_04.png"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   designation: string;
}[];

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: thumb_1,
      title: "Yevhen Oleksiy",
      designation: "Blockchain Architect",
   },
   {
      id: 2,
      page: "home_1",
      thumb: thumb_2,
      title: "Pavlo Fedor",
      designation: "Marketing Manger",
   },
   {
      id: 3,
      page: "home_1",
      thumb: thumb_3,
      title: "Serhii Anatolii",
      designation: "Founder & CEO",
   },
   {
      id: 4,
      page: "home_1",
      thumb: thumb_4,
      title: "Ivan Petrov",
      designation: "Blockchain Engineer",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      thumb: home_3thumb_1,
      title: "Michael Johnson",
      designation: "Developer",
   },
   {
      id: 2,
      page: "home_3",
      thumb: home_3thumb_2,
      title: "Nathaniel Lewis",
      designation: "Founder & CO",
   },
   {
      id: 3,
      page: "home_3",
      thumb: home_3thumb_3,
      title: "Timothy Young",
      designation: "Designer",
   },
   {
      id: 4,
      page: "home_3",
      thumb: home_3thumb_4,
      title: "David Williams",
      designation: "Consultant",
   },
];

export default team_data;