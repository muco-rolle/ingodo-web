import { Heading } from 'components';
import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { DocumentHead } from 'components';

import bg from 'assets/images/auth-bg.png';

interface AuthLayoutProps {
    title?: string;
    illustration: string;
    children: ReactNode;
}

export const AuthLayout = ({
    children,
    title,
    illustration,
}: AuthLayoutProps) => {
    return (
        <StyledAuthLayout>
            <DocumentHead title={title} />
            <AuthCard>
                <Heading level={1}>{title}</Heading>

                <div className="image-box">
                    <img
                        src={illustration}
                        alt="Authentication"
                        height="100px"
                    />
                </div>
                {children}
            </AuthCard>
        </StyledAuthLayout>
    );
};

const StyledAuthLayout = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background-image: url(${bg});
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f8f9fa;

    h1 {
        font-size: 25px;
        font-weight: 900;
        text-align: center;
    }

    .image-box {
        text-align: center;
        margin-bottom: 20px;
    }
`;

const AuthCard = styled.div`
    width: 400px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    background-color: white;
    box-shadow: 0 0 14px 0 rgba(53, 64, 82, 0.05);
    border-radius: 5px;
    margin: 3rem 0;
    padding: 30px;
`;
