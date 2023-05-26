import { createReducer } from '@reduxjs/toolkit'
import { UserGasPreferences, UserTheme, updateUserGasPreferences, updateUserTheme, updateUserLanguage, UserLanguage } from './actions'

export interface UserState {
  userGasPreferences: UserGasPreferences
  userTheme: UserTheme
  userLanguage: UserLanguage
}

export const initialState: UserState = {
  userGasPreferences: UserGasPreferences.NORMAL,
  userTheme: UserTheme.LIGHT,
  userLanguage: UserLanguage.EN,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserGasPreferences, (state, { payload: { userGasPreferences } }) => {
      state.userGasPreferences = userGasPreferences
    })
    .addCase(updateUserTheme, (state, { payload: { userTheme } }) => {
      state.userTheme = userTheme
    })
    .addCase(updateUserLanguage, (state, { payload: { userLanguage } }) => {
      state.userLanguage = userLanguage
    })
)
