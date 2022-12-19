import React from 'react';
import { } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { GET_GAME_ITEMS } from '../utils/queries';
import GatherLinkComponent from './GatherLinkComponent';
// import { useMutation } from '@apollo/client';

export default function GameRecipeComponent(props) {




    const { loading, data } = useQuery(GET_GAME_ITEMS, {
        // variables: { gameId: "639dd2e46f67310e54634f80" }
        variables: { gameId: props.gameId }
    });

    let itemData;
    let filteredItemData;

    if (loading) {
        return <h2>LOADING...</h2>;
    } else {
        itemData = data.getGameItems;

        function hasIngredients(item) {
            return item.recipe.length !== 0;
        }

        filteredItemData = itemData.filter(hasIngredients);

    }

    return (
        <>

            {filteredItemData.map((item, index) => {
                return (
                    <div>
                        <p className='text'>
                            <GatherLinkComponent 
                                name={item.name}
                                description={item.description}
                                itemId={item._id}
                            />
                        </p>
                    </div>
                )
            }
            )
            }
        </>
    )
}