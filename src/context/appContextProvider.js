
import GlobalState from "./Global/GlobalState";
import { combineComponents } from './combineContext.tsx';

const providers = [
    GlobalState
]

export const AppContextProvider = combineComponents(...providers);