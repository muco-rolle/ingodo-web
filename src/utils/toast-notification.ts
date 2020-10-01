import { store } from 'react-notifications-component';

interface NotifyProps {
	type: 'success' | 'danger' | 'info' | 'default' | 'warning' | undefined;
	title: string;
	message: string;
	duration?: number;
}

export const notify = ({ type, title, message, duration }: NotifyProps) => {
	return store.addNotification({
		title,
		message,
		type,
		insert: 'top',
		container: 'top-right',
		animationIn: ['animated jackInTheBox'],
		animationOut: ['animated zoomOutDown'],

		dismiss: {
			duration: duration || 5000,
			showIcon: true,
			onScreen: true,
			pauseOnHover: true,
		},
	});
};
