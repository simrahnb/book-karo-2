import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT' })

    }

    // clear experiences & bookings 
    // import useExperienceContext 
    // const { dispatch: workoutsDispatch } = useExperiencesContext()
    // workoutsDispatch({ type: 'SET_EXPERIENCES', payload: null})
    return {logout}

}