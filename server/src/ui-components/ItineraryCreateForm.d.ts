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
export declare type ItineraryCreateFormInputValues = {
    title?: string;
    owner?: string;
};
export declare type ItineraryCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItineraryCreateFormOverridesProps = {
    ItineraryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItineraryCreateFormProps = React.PropsWithChildren<{
    overrides?: ItineraryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItineraryCreateFormInputValues) => ItineraryCreateFormInputValues;
    onSuccess?: (fields: ItineraryCreateFormInputValues) => void;
    onError?: (fields: ItineraryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItineraryCreateFormInputValues) => ItineraryCreateFormInputValues;
    onValidate?: ItineraryCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItineraryCreateForm(props: ItineraryCreateFormProps): React.ReactElement;
