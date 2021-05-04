import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import useStyles from './styles';

// components
import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = () => {
    // hooks
    const inventory = useSelector(store => store.inventory);
    const user = useSelector(store => store.user);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch({ type: 'FETCH_ALL' });
    }, [dispatch]);

    return (
        // show circular loading bar to denote that things are loading
        <>
            <Typography variant="h3" className={classes.header}>
                My Store
            </Typography>
            {!inventory.length ? 
                <CircularProgress />
                :
                (
                    <div className={classes.root}>
                        <Grid 
                            className={classes.mainContainer}
                            cols={3}
                            container
                            spacing={2}
                            direction="row"
                            flexWrap="wrap"
                            justify="space-evenly"
                            alignItems="stretch"
                        >
                            <Grid item xs={12} spacing={3}>
                                {inventory.map((item) => (
                                    <InventoryItem user={user} item={item} key={item.id} />
                                ))}
                            </Grid>
                        </Grid>
                    </div>
                )}
        </>
    );
}

export default Inventory;