/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserEvent } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserEventUpdateFormInputValues = {
    eventId?: string;
    owner?: string;
};
export declare type UserEventUpdateFormValidationValues = {
    eventId?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserEventUpdateFormOverridesProps = {
    UserEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    eventId?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userEvent?: UserEvent;
    onSubmit?: (fields: UserEventUpdateFormInputValues) => UserEventUpdateFormInputValues;
    onSuccess?: (fields: UserEventUpdateFormInputValues) => void;
    onError?: (fields: UserEventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserEventUpdateFormInputValues) => UserEventUpdateFormInputValues;
    onValidate?: UserEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserEventUpdateForm(props: UserEventUpdateFormProps): React.ReactElement;
