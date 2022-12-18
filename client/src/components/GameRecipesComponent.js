// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_GAME_ITEMS } from '../utils/queries';
// import { useMutation } from '@apollo/client';

export default function GameRecipeComponent(props) {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    console.log(props.gameId);

    const { loading, data } = useQuery(GET_GAME_ITEMS, {
        // variables: { gameId: "639dd2e46f67310e54634f80" }
        variables: { gameId: props.gameId }
    });

    // const {loading, data} = useQuery(GET_LISTS);

    let itemData;
    let filteredItemData;

    if (loading) {
        return <h2>LOADING...</h2>;
    } else {
        itemData = data.getGameItems;
        console.log(itemData)

        function hasIngredients(item) {
            return item.recipe.length !== 0;
        }
        
        filteredItemData = itemData.filter(hasIngredients);
        
    }

    return (
        <>

            {filteredItemData.map((item) => {

                return (
                    <div>
                        <li>{item.name} - {item.description}</li>
                    </div>
                )
            }
            )
            }



            {/* <h2>stuff</h2> */}
        </>
    )
}