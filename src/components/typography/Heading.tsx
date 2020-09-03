import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}
const Heading1 = styled.h1``;
const Heading2 = styled.h2``;
const Heading3 = styled.h3``;
const Heading4 = styled.h4``;
const Heading5 = styled.h5``;
const Heading6 = styled.h6``;

export const Heading = ({ level, children }: HeadingProps) => {
    switch (level) {
        case 1:
            return <Heading1>{children}</Heading1>;

        case 2:
            return <Heading2>{children}</Heading2>;
        case 3:
            return <Heading3>{children}</Heading3>;
        case 4:
            return <Heading4>{children}</Heading4>;
        case 5:
            return <Heading5>{children}</Heading5>;
        case 6:
            return <Heading6>{children}</Heading6>;
    }
};
