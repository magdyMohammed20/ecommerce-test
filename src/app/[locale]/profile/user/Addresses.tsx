"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import RemoveModal from "@/components/RemoveModal/RemoveModal";
import AddressMenu from "@/components/AddressMenu/AddressMenu";

import { PaymenTrash } from "../../../../../public/assets/svg/profile";
import {
  AddressEditIcon,
  ProductArrowLeft,
} from "../../../../../public/assets/svg/checkoutSvg";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Home",
    location: "Riyadh - King Fahd Road - Olaya",
  },
  {
    id: 2,
    name: "Home",
    location: "Riyadh - King Fahd Road - Olaya",
  },
  {
    id: 3,
    name: "Home",
    location: "Riyadh - King Fahd Road - Olaya",
  },
  {
    id: 4,
    name: "Home",
    location: "Riyadh - King Fahd Road - Olaya",
  },
];

const Addresses = () => {
  const t = useTranslations();
  const [addresses, setAddresses] = useState(data);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showAddressMenu, setShowAddressMenu] = useState<boolean>(false);

  const handleSelectedAddress = (id: number | null) => {
    setSelectedId(id);
  };

  const handleRemove = () => {
    const updatedData = addresses.filter((item) => item.id !== selectedId);

    setAddresses(updatedData);
    handleSelectedAddress(null);
  };

  const handleAddressMenu = () => {
    setShowAddressMenu(!showAddressMenu);
  };

  return (
    <div className="profile-width-70">
      <div className="bg-white lg:rounded-lg flex items-center justify-between w-full px-6 py-4 mb-6 md:mb-8">
        <Link href="/profile" className="lg:hidden flex items-center gap-2">
          <span className="rtl:rotate-180">
            <ProductArrowLeft />
          </span>
          <p className="font-bold">{t("Addresses")}</p>
        </Link>
        <p className="font-bold hidden lg:block">{t("Addresses")}</p>
        <button
          className="btn-primary !w-fit !p-2 lg:!p-4"
          onClick={handleAddressMenu}>
          {t("Add New Address")}
        </button>
      </div>

      <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-0">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="p-4 md:p-6 bg-white flex items-center justify-between rounded-xl">
            <div className="flex flex-col">
              <p className="font-bold">{t(address.name)}</p>
              <p className="text-asphalt text-sm">{t(address.location)}</p>
            </div>
            <div className="flex items-center gap-2 md:gap-6">
              <span className="cursor-pointer" onClick={handleAddressMenu}>
                <AddressEditIcon />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleSelectedAddress(address.id)}>
                <PaymenTrash />
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedId && (
        <RemoveModal
          title="Address"
          onSave={handleRemove}
          onClose={() => handleSelectedAddress(null)}
        />
      )}

      {showAddressMenu && <AddressMenu onClose={handleAddressMenu} />}
    </div>
  );
};

export default Addresses;
