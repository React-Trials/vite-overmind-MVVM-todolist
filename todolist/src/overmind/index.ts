import { createStateHook, createActionsHook } from "overmind-react"
import { IContext } from 'overmind'
import { namespaced } from 'overmind/config'
import * as todolist from './todoViewModel'


export const config = namespaced({
    todolist
})

export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()