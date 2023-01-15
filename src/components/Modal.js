import { Modal } from 'antd';
import React,{ useEffect } from 'react';

export const ModalHolder = (props) => {
    const {onConfirm,onCancel} = props;

    Modal.confirm({
        title: 'Confirm',
        content: 'save it?',
        okText: 'Yes',
        cancelText: 'No',
        onOK:() => onConfirm(),
        onCancel:() => onCancel()
        });

    return (
        <></>
    )
}