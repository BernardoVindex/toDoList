import React from 'react'
import { withStorageListener } from './withStorageListener'

function ChangeAlert({ show, toggleShow}) {
    
    if(show) {
        return (
            <div>
                <div>
                    <p>Hubo cambios en la aplicación</p>
                    <p>Pulsa el boton para actualizar la aplicacion</p>
                    <button
                        onClick={toggleShow}
                    >
                        Volver a cargar la información
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }