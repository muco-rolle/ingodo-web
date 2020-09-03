import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Dropdown, Icon } from 'rsuite';
import { FaAngleDown } from 'react-icons/fa';
import { routes } from 'config';
import { storage } from 'utils';
import { useGetCurrentUserQuery } from 'resolvers';
import { breakpoints } from 'breakpoints';

export const Header = () => {
    const history = useHistory();
    const { data, loading, error } = useGetCurrentUserQuery();

    if (error) console.log(error);
    if (loading) return null;
    return (
        <StyledHeader>
            <div className="logo-box">
                <Link to={routes.home}>ingodo</Link>
            </div>

            <Dropdown
                renderTitle={() => {
                    return (
                        <div className="avatar-box">
                            <Avatar circle className="avatar">
                                {data?.getCurrentUser.username[0].toUpperCase()}
                            </Avatar>
                            <FaAngleDown />
                        </div>
                    );
                }}
            >
                <Dropdown.Item
                    onClick={() => {
                        storage.remove();
                        history.push(routes.login);
                    }}
                >
                    <Icon icon="sign-out" /> Logout
                </Dropdown.Item>
            </Dropdown>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 100px;
    box-shadow: 0 0 5px 0 rgba(53, 64, 82, 0.05);

    .logo-box {
        font-family: Pacifico, cursive;
        a {
            font-size: 25px;
            text-decoration: none;
        }
    }

    .avatar-box {
        display: flex;
        align-items: center;
        cursor: pointer;

        .avatar {
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
            background-color: white;
            color: #718096;
            margin-right: 5px;
            font-weight: 900;
        }

        svg {
            font-size: 16px;
        }
    }

    ${breakpoints.tablet} {
        padding: 0 50px;
    }

    ${breakpoints.mobileM} {
        padding: 0 20px;
    }
`;
