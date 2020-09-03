import React from 'react';
import { Helmet } from 'react-helmet';

interface DocumentHeadProps {
    title?: string;
}

export const DocumentHead = ({ title }: DocumentHeadProps) => {
    return (
        <Helmet>
            <title>Ingodo | {title || 'App'}</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
            />
        </Helmet>
    );
};
