import { useToast, useToastOptions } from '@chakra-ui/core';

interface NotificationProps extends useToastOptions {}

export const useNotification = () => {
    const toast = useToast();

    const notification = ({ title, description, status }: NotificationProps) =>
        toast({
            title,
            description,
            status,
            duration: 9000,
            position: 'top-right',
            isClosable: true,
        });

    return notification;
};
