import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    elements: [],
    activeId: null,
    idToDeleted: null,
    isPending: false,
    isError: false
};

export const elementsSlice = createSlice({
    name: "elements",
    initialState,
    reducers: {
        setState: (state, action) => {
            try {
                const valueArg = action.payload;
                for (const key in valueArg) {
                    if (Object.hasOwnProperty.call(valueArg, key) && Object.hasOwnProperty.call(state, key)) {
                        state[key] = valueArg[key];
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        setElement: (state, action) => {
            try {
                const {content} = action.payload;
                for (const key in content) {
                    if (Object.hasOwnProperty.call(content, key) && Object.hasOwnProperty.call(state.agents[state.activeId], key)) {
                        state.agents[state.activeId][key] = content[key];
                    }
                }
            } catch (e) {
                console.error(e);
            }
        },
        rollBackElement: (state, action) => {
            try {
                const { element } = action.payload;
                state.agents[state.activeId] = element;
            } catch (e) {
                console.error(e);
            }
        },
    },
});

export const getElements =
    (amount) =>
        async (dispatch = Function, getState = Function) => {
            try {
                dispatch(setState({ isPending: true }));
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
                if (Array.isArray(data)) {
                    dispatch(setState({ elements: data }));
                }
            } catch (error) {
                dispatch(setState({isPending: true}));
                console.error(error);
            } finally {
                dispatch(setState({isPending: false}));
            }
        };

export const { setState, setElement, rollBackElement } = elementsSlice.actions;
export const selectElementsState = (state) => state.elements;
export default elementsSlice.reducer;
