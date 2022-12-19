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
        
            <div className='w3-container  w3-padding-48 main'>
            
            <h1 className="w3-display-center w3-black w3-padding w3-center itemName">{listData.name}</h1>
            <div className="w3-card-4 gather">
            <h3 className='text text-padding'>Ingredients to Gather</h3> {" "}
            {listData.ingredients.map((ingredient) => {
                return (
                    <div>
                            <p className='list-item'>{ingredient.itemName} {" x"} {ingredient.qty}</p>
                    </div>
                )
            })}
            </div>
            <div className="w3-card-4 gather">
            <h3 className='text text-padding'>Items to Craft</h3>
            {listData.buildStack.map((item) => {
                return (
                    <div>

                            <p classname='text listFont'>{item.itemName} {" x"} {item.qty}</p>
                            {item.ingredients.map((ingredient) => {
                                return (
                                    <div>
   
                                            <p className='text list-item'>{ingredient.itemName} {" x"} {ingredient.qty}</p>
                                        
                                    </div>
                                )
                            })}

                    </div>
                )
            })}
            </div>
            <div className='w3-center'>
            <button onClick={runDelete} className='text w3-button w3-section w3-teal w3-ripple w3-margin w3-center button'>Complete List</button>
            </div>
        </div>
        
    )
}