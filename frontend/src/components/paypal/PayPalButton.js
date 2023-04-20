import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const PayPalButton = ({total, onPaymentSuccess, onPaymentError, disabled}) => {

    const [paypalClient, setPaypalClient] = useState(null);

    
    useEffect(() => {
        const paypalKey = async () => {
            const {data : clientId} = await axios.get('/api/config/paypal');
            setPaypalClient(clientId);
        };
        paypalKey();
    }, [paypalClient]);
    return (
        !paypalClient ? (
            <CircularProgress/>
        ) :
        <PayPalScriptProvider options={{ "client-id": paypalClient }}>
            <PayPalButtons
            disabled={disabled}
            forceReRender={[total(), paypalClient]}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        onPaymentSuccess(data);
                    });
                }}
                onError={(err) => {
                    onPaymentError(err);
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalButton;