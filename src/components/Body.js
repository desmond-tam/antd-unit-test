import { Button,Modal } from 'antd';
import React,{ useState } from 'react';

export const BodyDiv = () => {
    const [visible,setVisible] = useState(false);

    const onConfirmed = () => {
        console.log('confirmed');
        setVisible(false);
    }

    const onCancelled = () => {
        console.log("cancelled");
        setVisible(false);
    }

    const show = () => {
        setVisible(true);
    }


    return (
        <div>
            <Button id="btn-show" type="primary" onClick={() => show()}>Show modal</Button>
            {visible && (<Confirmation />)}
        </div>
    )
}