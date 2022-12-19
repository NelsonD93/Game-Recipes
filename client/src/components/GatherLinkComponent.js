import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { } from '../utils/actions';
import { useMutation } from '@apollo/client';
import { BUILD_LIST } from '../utils/mutations';



export default function GatherLinkComponent(props) {

    const [buildQty, setBuildQty] = useState(1);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setBuildQty(parseInt(event.target.value));
    };

    // eslint-disable-next-line no-unused-vars
    const [buildList, { error }] = useMutation(BUILD_LIST);

    const runBuild = async (event) => {
        event.preventDefault();
        try {
            const { data } = await buildList({
                variables: {
                    itemId: props.itemId,
                    name: props.name,
                    buildQty: buildQty
                }
            });
            const listId = data.buildList._id;

            navigate('/Gather', {state: { listId: listId }})
        } catch(err) {
            console.error(err);
        }     
    }

    return (
        <>
            {props.name} - {props.description} {" "}
            <label htmlFor="buildQty"></label>
            <input
                type="number"
                id="buildQty"
                name="buildQty"
                onChange={handleChange}
                value={buildQty}
            />
            <button 
            className='text w3-button w3-teal w3-margin'
            onClick={runBuild}>Build</button>
        </>
    )



}