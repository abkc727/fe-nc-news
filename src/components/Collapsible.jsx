import { useState } from "react";

export const Collapsible = ({children, descriptor}) => {

    const [isHidden, setIsHidden] = useState(false)

    function toggleIsHidden() {
        setIsHidden(!isHidden)
    }

    return (

        <div>
            <button onClick={toggleIsHidden}>
                {isHidden ? "Show" : "Hide"} {descriptor}

            </button>

            {isHidden ? null : children}
        </div>
    )
}