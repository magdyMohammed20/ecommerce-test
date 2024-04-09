"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import AddReview from "@/components/MyReviews/AddReview";
import OrderCard from "@/components/OrderCard/OrderCard";
import ReviewedCard from "@/components/MyReviews/ReviewedCard";
import StarContainer from "@/components/MyReviews/StarContainer";

import {
  NotReviewedSvg,
  ReviewedSvg,
} from "../../../../../../public/assets/svg/profile";

const types = [
  {
    id: 1,
    name: "Not Reviewed",
    value: "notReviewed",
    icon: {
      light: <NotReviewedSvg color="white" />,
      dark: <NotReviewedSvg color="#455560" />,
    },
  },
  {
    id: 2,
    name: "Reviewed",
    value: "reviewed",
    icon: {
      light: <ReviewedSvg color="white" />,
      dark: <ReviewedSvg color="#455560" />,
    },
  },
];

const orders = [
  {
    id: "92839",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
  {
    id: "92839",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
  {
    id: "92839",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
  {
    id: "92839",
    total: 160.78,
    date: "31 مايو، 2023",
    products: {
      count: 3,
      images: [
        "/assets/images/orders/pro-1.png",
        "/assets/images/orders/pro-2.png",
        "/assets/images/orders/pro-3.png",
        "/assets/images/orders/pro-4.png",
      ],
    },
  },
];

const myReviews = [1, 2, 3, 4, 5];

const MyReviews = () => {
  const t = useTranslations();
  const [showReviewPage, setShowReviewPage] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("notReviewed");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleReviewPage = () => {
    setShowReviewPage(!showReviewPage);
  };

  return (
    <div className="flex flex-col xl:max-w-[728px] xl:mx-auto w-full lg:gap-8">
      {showReviewPage ? (
        <AddReview onClose={handleReviewPage} />
      ) : (
        <>
          <div className="bg-white py-3 lg:py-4 px-4 md:px-8 lg:px-6 lg:rounded-lg overflow-scroll hide-scrollbar">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
              {types.map((type) => (
                <div
                  key={type.id}
                  className={`p-1 flex items-center cursor-pointer rounded-full ${
                    selectedType === type.value && "bg-cloud"
                  }`}
                  onClick={() => handleTypeChange(type.value)}>
                  <div
                    className={`p-2 rounded-full ${
                      selectedType === type.value ? "bg-primary" : "bg-cloud"
                    }`}>
                    {selectedType === type.value
                      ? type.icon.light
                      : type.icon.dark}
                  </div>
                  <p
                    className={`mx-3 font-bold whitespace-nowrap flex items-center ${
                      selectedType !== type.value && "text-asphalt"
                    }`}>
                    {t(type.name)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {selectedType === "reviewed" && (
            <div className="bg-white lg:rounded-xl p-4 md:px-8 lg:px-4">
              <StarContainer>
                {t("21 products rated")}{" "}
                <span className="font-bold">{t("You got 96 points")}</span>
              </StarContainer>
            </div>
          )}

          <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-0 mt-6 md:mt-8 lg:mt-0">
            {selectedType === "notReviewed"
              ? orders.map((order, index) => (
                  <OrderCard
                    key={index}
                    order={order}
                    type="review"
                    openAddReview={handleReviewPage}
                  />
                ))
              : myReviews.map((review) => <ReviewedCard key={review} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
