import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const {form, name, label, disabled} = props;
  const { formState: { errors }, formState  } = form;
  const hasError = formState.touchedFields[name] && errors[name]

  return (
    <Controller
      name={name}
      control={form.control}
      render={({field}) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}

          error={!!hasError}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;