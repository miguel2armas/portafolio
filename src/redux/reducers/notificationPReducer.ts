import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Notification {
    text: string;
    type: 'warning' | 'success';
    show: boolean;
  }
export interface NotificationPState {
  value: Notification;
}

const initialState: NotificationPState = {
  value: {
    text:'',
    type: 'warning',
    show: false
  }
};

export const notificationPSlice = createSlice({
  name: 'notificationP',
  initialState,
  reducers: {
    changeNotificationP: (state, action: PayloadAction<Notification>) => {
      state.value = action.payload;
    },
  },
});

export const { changeNotificationP } = notificationPSlice.actions;

export const selectNotificationP = (state: RootState) => state.notificationP.value;

export default notificationPSlice.reducer;


