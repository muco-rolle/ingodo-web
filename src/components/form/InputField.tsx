import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'rsuite';

interface InputFieldProps {
    name: string;
    type: string;
    label: string;
    accepter?: any;
    disableLabel?: boolean;
}

export const InputField = ({
    name,
    label,
    accepter,
    disableLabel,
    ...rest
}: any) => {
    return (
        <FormGroup>
            {disableLabel ? null : <ControlLabel>{label} </ControlLabel>}
            <FormControl
                name={name}
                accepter={accepter}
                placeholder={label}
                {...rest}
            />
        </FormGroup>
    );
};
