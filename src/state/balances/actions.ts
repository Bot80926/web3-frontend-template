import { createAction } from '@reduxjs/toolkit'

export const updateTotalBalance = createAction<{ totalBalances: { [key: string]: string } }>('user/updateTotalBalances')
