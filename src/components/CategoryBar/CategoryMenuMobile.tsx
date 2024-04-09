"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRightIconSvg,
  CloseIconSvg,
  LinksArrowSvg,
} from "../../../public/assets/svg/categoryBarSvgs";

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

const infoPages = [
  {
    id: 1,
    name: "Learn more about us",
    pages: [
      {
        id: 1,
        name: "who are we",
        link: "",
      },
      {
        id: 2,
        name: "Contact us",
        link: "",
      },
      {
        id: 3,
        name: "Start selling",
        link: "",
      },
      {
        id: 4,
        name: "Be influential",
        link: "",
      },
      {
        id: 5,
        name: "Traders portal",
        link: "",
      },
    ],
  },
  {
    id: 2,
    name: "Center & Help",
    pages: [
      {
        id: 1,
        name: "How to order",
        link: "",
      },
      {
        id: 2,
        name: "Shipping information",
        link: "",
      },
      {
        id: 3,
        name: "Frequently asked questions",
        link: "",
      },
      {
        id: 4,
        name: "privacy policy",
        link: "",
      },
      {
        id: 5,
        name: "terms of use",
        link: "",
      },
    ],
  },
];

interface Props {
  openMenuMobile: boolean;
  closeMenu: () => void;
}

const CategoryMenuMobile = ({ openMenuMobile, closeMenu }: Props) => {
  const locale = useLocale();
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleActiveCategory = (index: number | null) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`w-full min-h-screen bg-black/60 fixed top-0 z-50 right-[-100%] lg:hidden capitalize ${
        openMenuMobile && "!right-0"
      }`}
    >
      <div
        className={`max-w-[390px] md:max-w-[618px] w-full fixed top-0 min-h-screen bg-cloud duration-500 ease-in-out overflow-scroll hide-scrollbar max-h-screen
      ${
        openMenuMobile
          ? locale === "ar"
            ? "!right-0"
            : "!left-0"
          : locale === "ar"
          ? "right-[-100%]"
          : "left-[-100%]"
      }`}
      >
        {activeIndex !== null ? (
          <>
            <div
              className="flex items-center bg-white p-4 gap-4 cursor-pointer"
              onClick={() => handleActiveCategory(null)}
            >
              <div className="flex items-center gap-1">
                <div className="rotate-180">
                  <ArrowRightIconSvg />
                </div>
                <Image
                  src={categories[activeIndex].image}
                  alt="cat-image"
                  width={44}
                  height={44}
                  className="w-[44px] h-[44px] rounded-full"
                  loading="lazy"
                />
              </div>
              <p className="text-asphalt font-bold text-sm">
                {categories[activeIndex].name}
              </p>
            </div>

            <div className="p-4 flex flex-col gap-8">
              {categories[activeIndex].subCategories.map((subCategory) => (
                <div key={subCategory.id} className="flex flex-col gap-4">
                  <p className="text-primary text-base font-bold">
                    {subCategory.name}
                  </p>
                  <div className="bg-white w-full p-4 flex flex-wrap gap-2 rounded-xl">
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
          </>
        ) : (
          <>
            <div className="flex items-center justify-between bg-white p-4">
              <Image
                alt="logo"
                src="/assets/svg/logo.svg"
                width={130}
                height={26.5}
                className="max-w-[130px] max-h-[26.5px]"
                loading="lazy"
              />
              <div className="cursor-pointer" onClick={closeMenu}>
                <CloseIconSvg />
              </div>
            </div>

            <div className="p-4">
              <p className="text-primary font-bold text-base mb-4">
                {t("Shop by categories")}
              </p>

              <div className="bg-white p-4 rounded-xl w-full flex flex-col gap-2 mb-8">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`pt-2 pb-4 border-b border-b-silver/30 flex justify-between w-full items-center cursor-pointer text-asphalt hover:text-secondary duration-500 ease-in-out
                    ${index === categories.length - 1 && "border-b-0 pb-2"}`}
                    onClick={() => handleActiveCategory(index)}
                  >
                    <div className="flex items-center gap-4 font-bold text-sm whitespace-nowrap">
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
                    <ArrowRightIconSvg />
                  </div>
                ))}
              </div>

              {infoPages.map((page) => (
                <div key={page.id} className="flex flex-col gap-4">
                  <p className="text-primary font-bold text-base mb-4">
                    {t(page.name)}
                  </p>
                  <div className="bg-white p-4 rounded-xl w-full flex flex-col gap-2 mb-8">
                    {page.pages.map((item, index) => (
                      <Link
                        href={item.link}
                        key={item.id}
                        className={`pt-2 pb-4 border-b border-b-silver/30 flex gap-1 w-full items-center cursor-pointer text-asphalt hover:text-secondary duration-500 ease-in-out
                    ${index === page.pages.length - 1 && "border-b-0 pb-2"}`}
                      >
                        <LinksArrowSvg />
                        <p className="text-base">{t(item.name)}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryMenuMobile;
