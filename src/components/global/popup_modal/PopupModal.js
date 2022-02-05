import React, {useState, useEffect} from 'react';
import './PopupModal.scss';

export default function PopupModal(props) {
    const [blurred, setBlurred] = useState(false);
    const [visible, setVisible] = useState(true);

    

    return (
        <>
            <div class='popup_modal_wrap'>
                Hello World
            </div>
        </>
    );
}