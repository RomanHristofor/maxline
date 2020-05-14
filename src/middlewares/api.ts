import { Dispatch, Middleware, AnyAction } from 'redux'
import {START, SUCCESS, FAIL} from '../constants'


export interface Action {
    type: string
    callAPI?: string
}

export const api: Middleware<Dispatch> = store => next =>
    (action: Action | AnyAction) => {

    const {callAPI, type, ...rest} = action;
    if (!callAPI) return next(action);

    next({
        ...rest,
        type: type + START
    });

    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({...rest, type: type + SUCCESS, response}))
            .catch(error => next({...rest, type: type + FAIL, error}))
    }, 500)
}