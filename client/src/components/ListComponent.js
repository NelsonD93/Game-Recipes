// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_LIST } from '../utils/queries';
// import { useMutation } from '@apollo/client';

export default function ListComponent(props) {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    const { loading, data } = useQuery(GET_LIST, {
        variables: { listId: "639e3eb0727efb1a605bef28" }
    });

    // const {loading, data} = useQuery(GET_LISTS);

    let listData;

    if (loading) {
        return <h2>LOADING...</h2>;
    } else {
        listData = data.getList;
    }

    return (
        <>
            <h2>{listData.name}</h2>
            {listData.ingredients.map((ingredient) => {
                return (
                    <div>
                        <ul>
                            <li>Ingredient name: {ingredient.itemName}</li>
                            <li>Quantity needed: {ingredient.qty}</li>
                            <li>Quantity on hand: {ingredient.onHand}</li>
                        </ul>
                    </div>
                )
            })}
            {/* <h2>stuff</h2> */}
        </>
    )
}