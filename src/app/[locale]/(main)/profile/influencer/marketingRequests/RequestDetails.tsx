import { useState } from "react";

import PromoteReel from "./PromoteReel";
import ShippingInfo from "./ShippingInfo";
import RequestStore from "./RequestStore";
import TimerContainer from "./TimerContainer";
import GoBackLink from "../../user/GoBackLink";
import AcceptOrderMenu from "./AcceptOrderMenu";
import RequestProducts from "./RequestProducts";
import AcceptRejectBtns from "./AcceptRejectBtns";
import RequestCommission from "./RequestCommission";
import ShippingContainer from "./ShippingContainer";
import AddressMenu from "@/components/AddressMenu/AddressMenu";
import OrderStepper from "@/components/OrderStepper/OrderStepper";
import DeliveryAddress from "@/components/DeliveryAddress/DeliveryAddress";

import { OnTheWay } from "../../../../../../../public/assets/svg/orders";
import {
  ShippingCart,
  Box24,
} from "../../../../../../../public/assets/svg/marketingRequests";

interface Props {
  onClose: () => void;
}

const stepperData = [
  {
    id: 1,
    name: "Product shipped",
    date: "14 مايو",
    time: "2:00pm",
    icon: <ShippingCart width="24" className="" />,
    status: true,
  },
  {
    id: 2,
    name: "Product is on the way",
    date: "14 مايو",
    time: "2:00pm",
    icon: <OnTheWay />,
    status: false,
  },
  {
    id: 3,
    name: "Product delivered",
    date: "14 مايو",
    time: "2:00pm",
    icon: <Box24 />,
    status: false,
  },
];

const RequestDetails = ({ onClose }: Props) => {
  const [orderStatus, setOrderStatus] = useState<string>("");
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [acceptOrderMenu, setAcceptOrderMenu] = useState<boolean>(false);

  const handleAddressChange = () => {
    setOpenAddress((prevState) => !prevState);
  };

  const handleAcceptOrderMenu = () => {
    setAcceptOrderMenu((prevState) => !prevState);
  };

  const handleStatusChange = (status: string) => {
    setOrderStatus(status);
  };

  return (
    <>
      <GoBackLink
        title="Order Details"
        url="/profile?tab=marketing_requests"
        onChange={onClose}
      />

      <div className="px-4 md:px-8 pt-6 md:pt-8 lg:p-0 flex flex-col gap-6 w-full">
        {orderStatus === "shipping" ? (
          <>
            <ShippingContainer onSave={() => handleStatusChange("details")} />
            <RequestCommission />
            <RequestStore openAddress={() => handleStatusChange("promote")} />
            <RequestProducts />
          </>
        ) : orderStatus === "details" ? (
          <>
            <ShippingInfo onSave={() => handleStatusChange("shipping")} />
            <OrderStepper stepperData={stepperData} />
            <DeliveryAddress />
          </>
        ) : orderStatus === "promote" ? (
          <PromoteReel onSave={() => handleStatusChange("details")} />
        ) : (
          <>
            <div className="py-3 px-4 bg-white rounded-12 hidden lg:flex items-center justify-between gap-3">
              <TimerContainer />

              <div className="hidden xl:flex items-center gap-2 w-1/2 justify-end">
                <AcceptRejectBtns
                  onClose={onClose}
                  onSave={handleAddressChange}
                  className="max-w-[140px]"
                />
              </div>
            </div>

            <RequestCommission />
            <RequestStore />
            <RequestProducts />

            <div className="hidden lg:flex xl:hidden items-center gap-2 justify-end">
              <AcceptRejectBtns
                onClose={onClose}
                onSave={handleAddressChange}
              />
            </div>

            <div className="lg:hidden fixed bottom-[101px] inset-x-0 z-10">
              <TimerContainer />
            </div>

            <div className="lg:hidden fixed bottom-0 inset-x-0 w-full py-6 px-4 flex items-center gap-2 bg-white">
              <AcceptRejectBtns
                onClose={onClose}
                onSave={handleAddressChange}
              />
            </div>
          </>
        )}

        {openAddress && (
          <AddressMenu
            onSave={handleAcceptOrderMenu}
            onClose={handleAddressChange}
          />
        )}
        {acceptOrderMenu && (
          <AcceptOrderMenu
            onSave={() => {
              handleStatusChange("shipping");
              handleAcceptOrderMenu();
            }}
          />
        )}
      </div>
    </>
  );
};

export default RequestDetails;
