import { createAction } from 'redux-actions'

export const match = createAction('MATCH')

export const changeMode = createAction('CHANGE_MODE', mode => mode)
export const submitMode = createAction('SUBMIT_MODE', mode => mode)
export const nextMode = createAction('NEXT_MODE')

export const submitRegulation = createAction('SUBMIT_REGULATION', regulation => regulation)

export const enableScreenMode = createAction('ENABLE_SCREEN_MODE')
export const disableScreenMode = createAction('DISABLE_SCREEN_MODE')
