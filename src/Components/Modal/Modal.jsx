import React, { useEffect } from 'react'

export default function Modal({ title, children, onHide }) {
    useEffect(() => {
        const checkKey = (event) => {
            // console.log(event);
            if (event.keyCode === 27) {
                onHide()
            }
        }
        window.addEventListener('keydown', checkKey)
        return () => {
            console.log('event is dead');
            window.removeEventListener('keydown', checkKey)
        }
    })

    return (
        <div className='modal show-modal' id="show-info-modal">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                    </div>

                    {children}

                    <div className="modal-footer">
                        <button
                            className="btn btn-danger btn-lg"
                            onClick={onHide}
                        >
                            بستن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
