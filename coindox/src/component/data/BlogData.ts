import { StaticImageData } from "next/image";

import thumb_1 from "@/assets/img/blog/img_01.jpg"
import thumb_2 from "@/assets/img/blog/img_02.jpg"
import thumb_3 from "@/assets/img/blog/img_03.jpg"
import thumb_4 from "@/assets/img/blog/img_04.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   user: string;
   title: string;
   desc: string;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      thumb: thumb_1,
      user: "Colin Scotland",
      title: "Crypto Frontier Awaits Join Our ICO to Be at the Forefront of Innovation ideas.",
      desc: "Our ICO presents a unique opportunity to embark on a journey into the crypto frontier, where groundbreaking ideas and technological advancements converge.",
   },
   {
      id: 2,
      thumb: thumb_2,
      user: "Chris Matts",
      title: "From Concept to Reality Discover the Journey of Our ICO Project",
      desc: "we stand on the threshold of a significant milestone: our ICO campaign. This phase represents the culmination of our efforts an opportunity for you to be part of the journey.",
   },
   {
      id: 3,
      thumb: thumb_3,
      user: "Dan Kurtz",
      title: "ICO Launchpad Your Gateway to Exciting Investment Opportunities",
      desc: "The world of blockchain and cryptocurrency is dynamic and ever-evolving. As traditional boundaries shift, new avenues for growth emerge. Our ICO Launchpad is your.",
   },
   {
      id: 4,
      thumb: thumb_4,
      user: "Derek Gehl",
      title: "ICO Revolution Investing in Blockchain Solutions for a Decentralized World",
      desc: "Welcome to the ICO Revolution, where your investments have the power to reshape industries and drive the transformation towards a decentralized future.",
   },
   {
      id: 5,
      thumb: thumb_3,
      user: "Dan Kurtz",
      title: "ICO Launchpad Your Gateway to Exciting Investment Opportunities",
      desc: "The world of blockchain and cryptocurrency is dynamic and ever-evolving. As traditional boundaries shift, new avenues for growth emerge. Our ICO Launchpad is your.",
   },
   {
      id: 6,
      thumb: thumb_4,
      user: "Derek Gehl",
      title: "ICO Revolution Investing in Blockchain Solutions for a Decentralized World",
      desc: "Welcome to the ICO Revolution, where your investments have the power to reshape industries and drive the transformation towards a decentralized future.",
   },
   {
      id: 7,
      thumb: thumb_1,
      user: "Colin Scotland",
      title: "Crypto Frontier Awaits Join Our ICO to Be at the Forefront of Innovation ideas.",
      desc: "Our ICO presents a unique opportunity to embark on a journey into the crypto frontier, where groundbreaking ideas and technological advancements converge.",
   },
   {
      id: 8,
      thumb: thumb_2,
      user: "Chris Matts",
      title: "From Concept to Reality Discover the Journey of Our ICO Project",
      desc: "we stand on the threshold of a significant milestone: our ICO campaign. This phase represents the culmination of our efforts an opportunity for you to be part of the journey.",
   },
   {
      id: 9,
      thumb: thumb_1,
      user: "Colin Scotland",
      title: "Crypto Frontier Awaits Join Our ICO to Be at the Forefront of Innovation ideas.",
      desc: "Our ICO presents a unique opportunity to embark on a journey into the crypto frontier, where groundbreaking ideas and technological advancements converge.",
   },
   {
      id: 10,
      thumb: thumb_2,
      user: "Chris Matts",
      title: "From Concept to Reality Discover the Journey of Our ICO Project",
      desc: "we stand on the threshold of a significant milestone: our ICO campaign. This phase represents the culmination of our efforts an opportunity for you to be part of the journey.",
   },
];

export default blog_data;