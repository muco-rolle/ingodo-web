import { store } from 'react-notifications-component';

/**
 * Format Number Util
 */
export const formatNumber = (number: number) =>
    new Intl.NumberFormat('fr-BI', {
        style: 'currency',
        currency: 'BIF',
    }).format(number);

/**
 * Local storage util
 */
export const storage = {
    save(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    get(key: any) {
        return JSON.parse(localStorage.getItem(key) as string);
    },

    remove() {
        localStorage.clear();
    },
};

/**
 * Notifaction Toast Util
 */
interface NotifyProps {
    type: 'success' | 'danger' | 'info' | 'default' | 'warning' | undefined;
    title: string;
    message: string;
}

export const notify = ({ type, title, message }: NotifyProps) => {
    return store.addNotification({
        title,
        message,
        type,
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],

        dismiss: {
            duration: 9000,
            onScreen: true,
            showIcon: true,
            pauseOnHover: true,
        },
    });
};
