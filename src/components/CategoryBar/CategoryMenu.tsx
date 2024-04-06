"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import { ArrowRightIconSvg } from "../../../public/assets/svg/categoryBarSvgs";

const categories = [
  {
    id: 1,
    name: "Office accessories",
    image: "/assets/images/categoryMenu/cat-1.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "health and beauty",
    image: "/assets/images/categoryMenu/cat-2.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Electronics",
    image: "/assets/images/categoryMenu/cat-3.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Health and nutrition",
    image: "/assets/images/categoryMenu/cat-4.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Health and nutrition",
    image: "/assets/images/categoryMenu/cat-5.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Office accessories",
    image: "/assets/images/categoryMenu/cat-1.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Office accessories",
    image: "/assets/images/categoryMenu/cat-1.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Office accessories",
    image: "/assets/images/categoryMenu/cat-1.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Office accessories",
    image: "/assets/images/categoryMenu/cat-1.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Office accessories",
    image: "/assets/images/categoryMenu/cat-1.png",
    subCategories: [
      {
        id: 1,
        name: "makeup",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 7,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 8,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 9,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 10,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 11,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 12,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 13,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 14,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 2,
        name: "Beauty Tools",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
      {
        id: 3,
        name: "Personal care",
        items: [
          {
            id: 1,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 2,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 3,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 4,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 5,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
          {
            id: 6,
            name: "item-name",
            image: "/assets/images/categoryMenu/item-1.png",
          },
        ],
      },
    ],
  },
];

const CategoryMenu = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [activeCatId, setActiveCatId] = useState<number>(categories[0].id);

  const handleIdChange = (id: number) => {
    setActiveCatId(id);
  };

  return (
    <div className="absolute top-full z-50 left-0 right-0 mx-6 global-margin capitalize h-[75vh] max-h-[646px] overflow-hidden rounded-xl shadow-lg">
      <div className="bg-white w-full h-full p-10 hidden lg:flex items-start gap-10 overflow-hidden">
        <div
          className={`flex flex-col gap-3 border-cloud min-w-[340px] overflow-y-scroll h-full hide-scrollbar
        ${locale === "ar" ? "pl-10 border-l" : "pr-10 border-r"}
        `}
        >
          <div className="pb-6 border-b border-b-cloud text-primary text-xl font-bold px-3">
            <p>{t("All Categories")}</p>
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center justify-between p-2 rounded-full w-full cursor-pointer ${
                activeCatId === category.id && "bg-cloud"
              }`}
              onClick={() => handleIdChange(category.id)}
            >
              <div className="flex items-center gap-4 text-asphalt font-bold text-sm whitespace-nowrap">
                <Image
                  src={category.image}
                  alt="cat-image"
                  width={44}
                  height={44}
                  className="w-[44px] h-[44px] rounded-full"
                  loading="lazy"
                />
                <p>{category.name}</p>
              </div>

              <span className="px-4">
                <ArrowRightIconSvg />
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-8 py-4 max-w-[777px] overflow-scroll h-full hide-scrollbar">
          {categories[activeCatId - 1].subCategories.map((subCategory) => (
            <div key={subCategory.id} className="flex flex-col gap-4">
              <p className="text-primary font-bold">{subCategory.name}</p>
              <div className="flex flex-wrap gap-4">
                {subCategory.items.map((item) => (
                  <Link
                    href={""}
                    key={item.id}
                    className="flex flex-col gap-2 text-center"
                  >
                    <Image
                      src={item.image}
                      alt="item"
                      width={83}
                      height={83}
                      className="w-[83px] h-[83px] rounded-lg"
                      loading="lazy"
                    />
                    <p className="text-asphalt font-bold text-[10px] whitespace-nowrap">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
