// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {  } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_GAME_ITEMS } from '../utils/queries';
// import { useMutation } from '@apollo/client';

export default function GameRecipeComponent() {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    const {loading, data} = useQuery(GET_GAME_ITEMS, {
        variables: { gameId: "639dd2e46f67310e54634f80"}
    });

    // const {loading, data} = useQuery(GET_LISTS);

    let itemData;

    if (loading) {
        return <h2>LOADING...</h2>;
    } else {
        itemData = data.getGameItems;
        console.log(itemData)
    }

    return (
        <>
        <h2>{itemData[0].name}</h2>
        {/* <h2>stuff</h2> */}
        </>
    )
}