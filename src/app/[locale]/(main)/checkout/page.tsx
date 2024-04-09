import React from 'react'
import AddressPayment from './AddressPayment'
import OrderDetails from './OrderDetails'

const page = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 py-[28px] md:py-[60px] global-padding'>
      <AddressPayment />
      <OrderDetails />
    </div>
  )
}

export default page