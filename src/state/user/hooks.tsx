import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from '../index'
import { updateUserGasPreferences, updateUserTheme, UserGasPreferences, UserTheme } from './actions'

// Get user preference Theme mode
export function useThemeMode(): string {
  return useSelector<AppState, AppState['user']['userTheme']>((state) => state.user.userTheme)
}

export function useThemeModeManager(): [string, () => void] {
  const dispatch = useAppDispatch()
  const userThemeMode = useThemeMode()

  const toggleSetThemeMode = useCallback(() => {
    dispatch(updateUserTheme({ userTheme: userThemeMode === UserTheme.LIGHT ? UserTheme.DARK : UserTheme.LIGHT }))
  }, [dispatch, userThemeMode])

  return [userThemeMode, toggleSetThemeMode]
}

// Get user preference gas price
export function useGasPricePreference(): string {
  return useSelector<AppState, AppState['user']['userGasPreferences']>((state) => state.user.userGasPreferences)
}

export function useGasPricePreferenceManager(): [string, (gasPreference: UserGasPreferences) => void] {
  const dispatch = useAppDispatch()
  const userGasPricePreferences = useGasPricePreference()

  const toggleSetGasPricePreferences = useCallback(
    (gasPreference: UserGasPreferences) => {
      dispatch(updateUserGasPreferences({ userGasPreferences: gasPreference }))
    },
    [dispatch]
  )

  return [userGasPricePreferences, toggleSetGasPricePreferences]
}

// Get user preference language
export function useUserLanguage(): string {
  return useSelector<AppState, AppState['user']['userLanguage']>((state) => state.user.userLanguage)
}
