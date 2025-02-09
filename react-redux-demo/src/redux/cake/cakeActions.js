import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (number=1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }//payload is userdefined and it's props of an action
}