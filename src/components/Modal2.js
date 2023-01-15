import { Modal } from 'antd';
import React from 'react';

export const Modal2 = (props) => {
    const {onConfirm,onCancel} = props;

    return (
        <Modal
          title="Basic Modal"
          onOk={onConfirm}
          onCancel={onCancel}
          open={true}
          okText="Save"
          cancelText="Not Save"
        />
    )
}