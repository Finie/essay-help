import React from 'react'

import './button.css'

function EssayButton({onClick,children}) {

    return (
        <button onClick={onClick} className="essayButton">
            {children}
        </button>
    )
}

export default EssayButton
