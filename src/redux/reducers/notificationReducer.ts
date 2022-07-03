import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Notification {
  text: string;
  type: 'warning' | 'success';
  show: boolean;
}
export interface NotificationState {
  value: Notification;
}
const initialState: NotificationState = {
  value: {
    text:'',
    type: 'warning',
    show: false
  },
};

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setShowNotification: (state, action: PayloadAction<Notification>) => {
      state.value = action.payload;
    },
  },
});

export const { setShowNotification } = NotificationSlice.actions;

export const NotificationOptions = (state: RootState) => state.notification.value;

export default NotificationSlice.reducer;


