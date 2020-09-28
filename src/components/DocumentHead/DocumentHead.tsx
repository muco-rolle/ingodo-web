import NextHead from 'next/head';

interface DocumentHeadProps {
	title?: string;
}

export const DocumentHead = (props: DocumentHeadProps): JSX.Element => {
	return (
		<NextHead>
			<meta charSet="UTF-8" />

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

			{/* plus jakarta font */}
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css"
			/>
			<title>Ingodo | {props.title || 'Home'}</title>
		</NextHead>
	);
};
