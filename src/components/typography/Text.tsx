import React, { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    level: 1 | 2 | 3;
    children: ReactNode;
}
const Text1 = styled.p`
    font-size: 16px;
`;
const Text2 = styled.p`
    font-size: 18px;
`;
const Text3 = styled.p`
    font-size: 20px;
`;

export const Text = (props: TextProps) => {
    switch (props.level) {
        case 1:
            return <Text1 {...props}>{props.children}</Text1>;

        case 2:
            return <Text2 {...props}>{props.children}</Text2>;
        case 3:
            return <Text3 {...props}>{props.children}</Text3>;
    }
};
