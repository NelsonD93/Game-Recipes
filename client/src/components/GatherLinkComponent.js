import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { } from '../utils/actions';


export default function GatherLinkComponent(props) {

    const [buildQty, setBuildQty] = useState(1);

    const handleChange = (event) => {
        setBuildQty(event.target.value);
    };

    return (
        <>
            {props.name} - {props.description} {" "}
            <label for="buildQty">Build quantity: </label>
            <input
                type="number"
                id="buildQty"
                name="buildQty"
                onChange={handleChange}
                value={buildQty}
            />
            <Link to="/Gather"
            state={{ itemId: props.itemId, buildQty: buildQty }}
            >
                <button>Build</button>
            </Link>
            </>
    )
                    
                

}