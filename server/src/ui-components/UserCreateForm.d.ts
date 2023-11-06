/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    userSub?: string;
    givenName?: string;
    familyName?: string;
    email?: string;
    language?: string;
    loginWizard?: boolean;
    reminder1?: number;
    reminder2?: number;
    advanceTime?: number;
    interestTags?: string[];
};
export declare type UserCreateFormValidationValues = {
    userSub?: ValidationFunction<string>;
    givenName?: ValidationFunction<string>;
    familyName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    language?: ValidationFunction<string>;
    loginWizard?: ValidationFunction<boolean>;
    reminder1?: ValidationFunction<number>;
    reminder2?: ValidationFunction<number>;
    advanceTime?: ValidationFunction<number>;
    interestTags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
    givenName?: PrimitiveOverrideProps<TextFieldProps>;
    familyName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    language?: PrimitiveOverrideProps<TextFieldProps>;
    loginWizard?: PrimitiveOverrideProps<SwitchFieldProps>;
    reminder1?: PrimitiveOverrideProps<TextFieldProps>;
    reminder2?: PrimitiveOverrideProps<TextFieldProps>;
    advanceTime?: PrimitiveOverrideProps<TextFieldProps>;
    interestTags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
