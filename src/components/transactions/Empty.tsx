import React from 'react';
import styled from 'styled-components';
import { Text } from 'components';

export const Empty = () => {
    return (
        <StyledEmpty>
            <div>
                <img
                    src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    alt="empty data"
                />
            </div>

            <Text style={{ marginTop: '20px', textAlign: 'center' }} level={2}>
                No Transactions
            </Text>
        </StyledEmpty>
    );
};

const StyledEmpty = styled.div`
    text-align: center;
    margin-top: 20px;
`;
