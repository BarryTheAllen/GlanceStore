import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { cartActions } from "../../../features/addToCart/cartSlice"
import { useMemo } from "react"

export const useCartActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(cartActions, dispatch), [dispatch])
}