import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, CircularProgress, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    position: 'relative',
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    padding: theme.spacing(2, 4),
    margin: theme.spacing(2, 0, 1, 0),
    width: '100%',
  },

  process: {
    position: 'absolute',
    top: theme.spacing(2),
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('Should has at least two words', 'Please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email.').email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password.').min(6, 'Please enter at least 6 char'),
    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.process} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" className={classes.submit}>
          {isSubmitting ? <CircularProgress /> : 'Create An Account'}
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
