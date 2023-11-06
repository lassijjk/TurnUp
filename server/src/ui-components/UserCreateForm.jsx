/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createUser } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userSub: "",
    givenName: "",
    familyName: "",
    email: "",
    language: "",
    loginWizard: false,
    reminder1: "",
    reminder2: "",
    advanceTime: "",
    interestTags: [],
  };
  const [userSub, setUserSub] = React.useState(initialValues.userSub);
  const [givenName, setGivenName] = React.useState(initialValues.givenName);
  const [familyName, setFamilyName] = React.useState(initialValues.familyName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [language, setLanguage] = React.useState(initialValues.language);
  const [loginWizard, setLoginWizard] = React.useState(
    initialValues.loginWizard
  );
  const [reminder1, setReminder1] = React.useState(initialValues.reminder1);
  const [reminder2, setReminder2] = React.useState(initialValues.reminder2);
  const [advanceTime, setAdvanceTime] = React.useState(
    initialValues.advanceTime
  );
  const [interestTags, setInterestTags] = React.useState(
    initialValues.interestTags
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserSub(initialValues.userSub);
    setGivenName(initialValues.givenName);
    setFamilyName(initialValues.familyName);
    setEmail(initialValues.email);
    setLanguage(initialValues.language);
    setLoginWizard(initialValues.loginWizard);
    setReminder1(initialValues.reminder1);
    setReminder2(initialValues.reminder2);
    setAdvanceTime(initialValues.advanceTime);
    setInterestTags(initialValues.interestTags);
    setCurrentInterestTagsValue("");
    setErrors({});
  };
  const [currentInterestTagsValue, setCurrentInterestTagsValue] =
    React.useState("");
  const interestTagsRef = React.createRef();
  const validations = {
    userSub: [],
    givenName: [],
    familyName: [],
    email: [],
    language: [],
    loginWizard: [],
    reminder1: [],
    reminder2: [],
    advanceTime: [],
    interestTags: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userSub,
          givenName,
          familyName,
          email,
          language,
          loginWizard,
          reminder1,
          reminder2,
          advanceTime,
          interestTags,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createUser.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="User sub"
        isRequired={false}
        isReadOnly={false}
        value={userSub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub: value,
              givenName,
              familyName,
              email,
              language,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.userSub ?? value;
          }
          if (errors.userSub?.hasError) {
            runValidationTasks("userSub", value);
          }
          setUserSub(value);
        }}
        onBlur={() => runValidationTasks("userSub", userSub)}
        errorMessage={errors.userSub?.errorMessage}
        hasError={errors.userSub?.hasError}
        {...getOverrideProps(overrides, "userSub")}
      ></TextField>
      <TextField
        label="Given name"
        isRequired={false}
        isReadOnly={false}
        value={givenName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              givenName: value,
              familyName,
              email,
              language,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.givenName ?? value;
          }
          if (errors.givenName?.hasError) {
            runValidationTasks("givenName", value);
          }
          setGivenName(value);
        }}
        onBlur={() => runValidationTasks("givenName", givenName)}
        errorMessage={errors.givenName?.errorMessage}
        hasError={errors.givenName?.hasError}
        {...getOverrideProps(overrides, "givenName")}
      ></TextField>
      <TextField
        label="Family name"
        isRequired={false}
        isReadOnly={false}
        value={familyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName: value,
              email,
              language,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.familyName ?? value;
          }
          if (errors.familyName?.hasError) {
            runValidationTasks("familyName", value);
          }
          setFamilyName(value);
        }}
        onBlur={() => runValidationTasks("familyName", familyName)}
        errorMessage={errors.familyName?.errorMessage}
        hasError={errors.familyName?.hasError}
        {...getOverrideProps(overrides, "familyName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email: value,
              language,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Language"
        isRequired={false}
        isReadOnly={false}
        value={language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email,
              language: value,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.language ?? value;
          }
          if (errors.language?.hasError) {
            runValidationTasks("language", value);
          }
          setLanguage(value);
        }}
        onBlur={() => runValidationTasks("language", language)}
        errorMessage={errors.language?.errorMessage}
        hasError={errors.language?.hasError}
        {...getOverrideProps(overrides, "language")}
      ></TextField>
      <SwitchField
        label="Login wizard"
        defaultChecked={false}
        isDisabled={false}
        isChecked={loginWizard}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email,
              language,
              loginWizard: value,
              reminder1,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.loginWizard ?? value;
          }
          if (errors.loginWizard?.hasError) {
            runValidationTasks("loginWizard", value);
          }
          setLoginWizard(value);
        }}
        onBlur={() => runValidationTasks("loginWizard", loginWizard)}
        errorMessage={errors.loginWizard?.errorMessage}
        hasError={errors.loginWizard?.hasError}
        {...getOverrideProps(overrides, "loginWizard")}
      ></SwitchField>
      <TextField
        label="Reminder1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={reminder1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email,
              language,
              loginWizard,
              reminder1: value,
              reminder2,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.reminder1 ?? value;
          }
          if (errors.reminder1?.hasError) {
            runValidationTasks("reminder1", value);
          }
          setReminder1(value);
        }}
        onBlur={() => runValidationTasks("reminder1", reminder1)}
        errorMessage={errors.reminder1?.errorMessage}
        hasError={errors.reminder1?.hasError}
        {...getOverrideProps(overrides, "reminder1")}
      ></TextField>
      <TextField
        label="Reminder2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={reminder2}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email,
              language,
              loginWizard,
              reminder1,
              reminder2: value,
              advanceTime,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.reminder2 ?? value;
          }
          if (errors.reminder2?.hasError) {
            runValidationTasks("reminder2", value);
          }
          setReminder2(value);
        }}
        onBlur={() => runValidationTasks("reminder2", reminder2)}
        errorMessage={errors.reminder2?.errorMessage}
        hasError={errors.reminder2?.hasError}
        {...getOverrideProps(overrides, "reminder2")}
      ></TextField>
      <TextField
        label="Advance time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={advanceTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email,
              language,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime: value,
              interestTags,
            };
            const result = onChange(modelFields);
            value = result?.advanceTime ?? value;
          }
          if (errors.advanceTime?.hasError) {
            runValidationTasks("advanceTime", value);
          }
          setAdvanceTime(value);
        }}
        onBlur={() => runValidationTasks("advanceTime", advanceTime)}
        errorMessage={errors.advanceTime?.errorMessage}
        hasError={errors.advanceTime?.hasError}
        {...getOverrideProps(overrides, "advanceTime")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userSub,
              givenName,
              familyName,
              email,
              language,
              loginWizard,
              reminder1,
              reminder2,
              advanceTime,
              interestTags: values,
            };
            const result = onChange(modelFields);
            values = result?.interestTags ?? values;
          }
          setInterestTags(values);
          setCurrentInterestTagsValue("");
        }}
        currentFieldValue={currentInterestTagsValue}
        label={"Interest tags"}
        items={interestTags}
        hasError={errors?.interestTags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("interestTags", currentInterestTagsValue)
        }
        errorMessage={errors?.interestTags?.errorMessage}
        setFieldValue={setCurrentInterestTagsValue}
        inputFieldRef={interestTagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Interest tags"
          isRequired={false}
          isReadOnly={false}
          value={currentInterestTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.interestTags?.hasError) {
              runValidationTasks("interestTags", value);
            }
            setCurrentInterestTagsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("interestTags", currentInterestTagsValue)
          }
          errorMessage={errors.interestTags?.errorMessage}
          hasError={errors.interestTags?.hasError}
          ref={interestTagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "interestTags")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
