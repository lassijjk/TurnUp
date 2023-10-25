/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserEventCreateFormInputValues = {
    eventId?: string;
    owner?: string;
};
export declare type UserEventCreateFormValidationValues = {
    eventId?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserEventCreateFormOverridesProps = {
    UserEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    eventId?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserEventCreateFormProps = React.PropsWithChildren<{
    overrides?: UserEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserEventCreateFormInputValues) => UserEventCreateFormInputValues;
    onSuccess?: (fields: UserEventCreateFormInputValues) => void;
    onError?: (fields: UserEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserEventCreateFormInputValues) => UserEventCreateFormInputValues;
    onValidate?: UserEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserEventCreateForm(props: UserEventCreateFormProps): React.ReactElement;
