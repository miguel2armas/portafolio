import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface NotificationState {
  value: string;
  type: 'warning' | 'success';
  show: boolean;
}

const initialState: NotificationState = {
  value: '',
  type: 'warning',
  show: false
};

export const showNotification = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setShowNotification: (state, action: PayloadAction<NotificationState>) => {
      
      state = action.payload;
    },
  },
});

export const { setShowNotification } = showNotification.actions;

export const NotificationOptions = (state: RootState) => state;

export default showNotification.reducer;


