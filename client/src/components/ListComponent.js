import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_LISTS } from '../utils/queries';

export default function ListComponent() {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    // const {loading, data} = useQuery(GET_LIST, {
    //     variables: { listId: "639a588ce0b4294568ded4ae" }
    // });

    const {loading, data} = useQuery(GET_LISTS);

    console.log(data)

    // let listData = data.getList;

    // if (loading) {
    //     return <h2>LOADING...</h2>;
    //   }

    return (<h2>Stuff</h2>)
}