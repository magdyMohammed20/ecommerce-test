"use client";

import { useState } from "react";

import RemoveModal from "@/components/RemoveModal/RemoveModal";

import {
  PaymenMaster,
  PaymenTrash,
  PaymentMada,
} from "../../../../../../public/assets/svg/profile";

const data = [
  {
    id: 1,
    number: "************ 1765",
    date: "07/26",
    icon: <PaymentMada />,
  },
  {
    id: 2,
    number: "************ 1765",
    date: "07/26",
    icon: <PaymenMaster />,
  },
  {
    id: 3,
    number: "************ 1765",
    date: "07/26",
    icon: <PaymentMada />,
  },
];

const PaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState(data);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCardNumber, setSelectedCardNumber] = useState<string>("");

  const handleSelectedMethod = (id: number | null, cardNumber: string) => {
    setSelectedId(id);
    setSelectedCardNumber(cardNumber);
  };

  const handleRemove = () => {
    const updatedData = paymentMethods.filter((item) => item.id !== selectedId);

    setPaymentMethods(updatedData);
    handleSelectedMethod(null, "");
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4 profile-width-70 px-4 md:px-8 lg:px-0 mt-6 md:mt-8 lg:mt-0">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className="p-4 md:p-6 bg-white flex items-center justify-between rounded-xl text-asphalt">
          <div className="flex items-center gap-3 md:gap-4">
            {method.icon}
            <p className="font-bold">{method.number}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-8">
            <p className="text-18">{method.date}</p>
            <span
              className="cursor-pointer"
              onClick={() => handleSelectedMethod(method.id, method.number)}>
              <PaymenTrash />
            </span>
          </div>
        </div>
      ))}

      {selectedId && (
        <RemoveModal
          title="Card"
          cardNumber={selectedCardNumber}
          onSave={handleRemove}
          onClose={() => handleSelectedMethod(null, "")}
        />
      )}
    </div>
  );
};

export default PaymentMethod;
