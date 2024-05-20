"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";


export function ThreeDCard({ title, description, img1,img2, imgClassName,key }: {
    title: string,
    description: string,
    img1?: string,
    img2?:string,
    imgClassName: string,
    key:number
}) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="lg:w-36 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-accend dark:border-white/[0.2] border-black/[0.1] w-auto md:w-32 sm:w-24 h-auto rounded-xl p-6 border lg:gap-2 ">
                <CardItem
                    translateZ="50"
                    className="lg:text-xl text-sm font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
             
                <CardItem translateZ="100"
                    rotateX={20}
                    rotateZ={-10} className="w-8 lg:w-20 ">
                    <img src={img1} alt="" />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className="lg:text-xl text-sm font-bold text-neutral-600 dark:text-white lg:gap-2"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100"
                    rotateX={20}
                    rotateZ={-10} className="w-8 lg:w-20 ">
                    <img src={img2} alt="" />
                </CardItem>

            </CardBody>
        </CardContainer>
    );
}
