import React, { useState, useEffect } from 'react'


interface DeliverySetting {
    CutOffTime: string;
    ShippingCharge: number;
}

const DeliverySettingList: Array<DeliverySetting> = [
    {
        CutOffTime: '01/02/2020',
        ShippingCharge: 11.99
    },
    {
        CutOffTime: '01/03/2020',
        ShippingCharge: 22.99
    },
    {
        CutOffTime: '01/04/2020',
        ShippingCharge: 33.99
    },
    {
        CutOffTime: '01/04/2020',
        ShippingCharge: 44.99
    }
]

const App = () => {

    const [settings, setSettings] = useState({
        disableDay: [],
        minDate: null,
        maxDate: null,
        defaultValue: "123",
    });


    useEffect(() => {
        getDefaultDeliveryDate();
    }, []);

    const getDefaultDeliveryDate = () => {

        const settings = getDeliveryDateSettings();
        setSettings(settings);

        if (settings) {

        }

    }

    const getDeliveryDateSettings = () => {

        return {
            disableDay: [],
            minDate: null,
            maxDate: null,
            defaultValue: "456",
        }
    }

    const map = new Map(
        DeliverySettingList.map(delivery => [delivery.CutOffTime, delivery.ShippingCharge])
    );


    return (
        <div>
            {settings.defaultValue}
        </div>
    )

}

export default App;