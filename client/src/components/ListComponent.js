// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { } from '../utils/actions';
import { useQuery, useMutation } from '@apollo/client';
import { GET_LIST } from '../utils/queries';
import { DELETE_LIST } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

export default function ListComponent(props) {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);
    const navigate = useNavigate();

    const { loading, data } = useQuery(GET_LIST, {
        // variables: { listId: "639e3eb0727efb1a605bef28" }
        variables: { listId: props.listId }
    });

    // eslint-disable-next-line no-unused-vars
    const [deleteList, { error }] = useMutation(DELETE_LIST);

    const runDelete = async (event) => {
        event.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await deleteList({
                variables: {
                    listId: props.listId,
                    userId: listData.userId
                }
            });
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    // const {loading, data} = useQuery(GET_LISTS);

    let listData;

    if (loading) {
        return <h2>LOADING...</h2>;
    } else {
        listData = data.getList;
    }

    return (
        <>
            <h1>{listData.name}</h1>
            <h3>Ingredients to Gather</h3> {" "}
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
            <h3>Items to Craft</h3>
            {listData.buildStack.map((item) => {
                return (
                    <div>
                        <ul>
                            <li>Item name: {item.itemName} Quantity: {item.qty}</li>
                            {item.ingredients.map((ingredient) => {
                                return (
                                    <div>
                                        <ul>
                                            <li>Ingredient name: {ingredient.itemName} Quantity: {ingredient.qty}</li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
            <button onClick={runDelete}>Complete List</button>
        </>
    )
}