// hooks/useToast.ts
import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info';

export function useToast() {
  const showToast = (
    type: ToastType,
    title: string,
    message?: string
  ) => {
    Toast.show({
      type,
      text1: title,
      text2: message,
      position: 'top',
      visibilityTime: 3000,
    });
  };

  return {
    onSuccess: (title: string, message?: string) =>
      showToast('success', title, message),
    onError: (title: string, message?: string) =>
      showToast('error', title, message),
    onInfo: (title: string, message?: string) =>
      showToast('info', title, message),
  };
}
