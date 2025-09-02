import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { favActions } from "../../features/addToFavorites/addToFavSlice"
import { useMemo } from "react"

export const useFavActions = () => {

    const dispatch = useDispatch()
    
    return useMemo(() => bindActionCreators(favActions, dispatch), [dispatch])
}