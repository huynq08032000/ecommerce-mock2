import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";

const CheckOutComponent = () => {

    const { user, cart } = useSelector(state => state.user)

    return (
        <>
            <CustomSeparator breadcums={[{ label: 'Shopping Cart', href: '/shoppingcart' }, { label: 'Checkout' }]} />
            <Typography fontSize={40} fontWeight={700} lineHeight={'47px'}>Checkout</Typography>
            <div className="checkout-container">
                <div className="left-side">

                </div>
                <div className="right-side">

                </div>
            </div>
        </>
    )
}

export default CheckOutComponent;