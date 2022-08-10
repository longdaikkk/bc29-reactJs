import React, {useState} from 'react'
import './index.scss'

export default function Chair(props) {

    const [choose, setChoose] = useState(false);

    const populateClass = () => {
        let defaultClass = "ghe btn";

        if (props.item.loaiGhe === "Vip") {
            defaultClass += " gheVip";
        }

        if(choose){
            defaultClass += " dangDat";
        }

        if (props.item.daDat) {
            defaultClass += " daDat";
        }
        return defaultClass;
    }

    const chooseChair = () => {
        setChoose(!choose);

    }

    return (
        <button disabled={props.item.daDat} onClick={() => {
            chooseChair(props.item.tenGhe);
            props.handleSelect(props.item);
        }} className={populateClass()}>
            {props.item.tenGhe}
        </button>
    )
}
