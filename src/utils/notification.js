import React from "React";
import { Modal } from "antd";

export const confirmation = (title,content) => {
    return new Promise((resolve) => {
        Modal.confirm({
            title:title,
            contents:content,
            okText:"Yes",
            cancelText:"No",
            closable:false,
            onOk:() => resolve("yes"),
            onCancel:() => resolve("no")       
        })
    })

}