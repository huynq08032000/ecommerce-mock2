import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { getAllProducts } from "../config/api"

const initState = {
    isLoading: false,
    carouselProducts: [],
    lastestProducts : []
}

const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState: initState,
    reducers: {
        setCarouseProduct: (state, payload) => {
            state.carouselProduct = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductCarousel.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProductCarousel.fulfilled, (state, action) => {
                state.isLoading = false;
                state.carouselProducts = action.payload.result
            })
    }
})

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (searchParams) => {
    try {
        const res = await axios(getAllProducts, {
            params: searchParams
        })
        return res.data.data
    } catch (err) {
        console.log(err)
    }
})

export const fetchProductCarousel = createAsyncThunk('products/fetchProduct', async (searchParams) => {
    try {
        const res = await axios(getAllProducts, {
            params: searchParams
        })
        return res.data.data
    } catch (err) {
        console.log(err)
    }
})
export const { setCarouseProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;