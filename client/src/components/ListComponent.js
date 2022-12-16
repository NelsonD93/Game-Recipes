// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {  } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_LIST } from '../utils/queries';
import { useMutation } from '@apollo/client';

export default function ListComponent() {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    const {loading, data} = useQuery(GET_LIST, {
        variables: { listId: "639b7c9b2c90d23344687bfe"}
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
        <h2>{listData.buildStack[0].itemName}</h2>
        {/* <h2>stuff</h2> */}
        </>
    )
}