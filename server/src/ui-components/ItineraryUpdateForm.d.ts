/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Itinerary } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItineraryUpdateFormInputValues = {
    title?: string;
    owner?: string;
};
export declare type ItineraryUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItineraryUpdateFormOverridesProps = {
    ItineraryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItineraryUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItineraryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    itinerary?: Itinerary;
    onSubmit?: (fields: ItineraryUpdateFormInputValues) => ItineraryUpdateFormInputValues;
    onSuccess?: (fields: ItineraryUpdateFormInputValues) => void;
    onError?: (fields: ItineraryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItineraryUpdateFormInputValues) => ItineraryUpdateFormInputValues;
    onValidate?: ItineraryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItineraryUpdateForm(props: ItineraryUpdateFormProps): React.ReactElement;
