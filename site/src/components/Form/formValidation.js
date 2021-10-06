const errorOptions = {
  name: {
    empty: 'name must be provided',
    notAllLetter: 'name must contain only letters',
  },
  email: {
    empty: 'email must be provided',
    missingAt: 'email must includes @',
  },
  content: {
    empty: 'description must be provided',
    length: 'description must be more than one line',
  },
};

export default function formValidation({ values }) {
  let errors = {};
  if (values.name.trim().length === 0) {
    errors.name = errorOptions.name.empty;
  }
  if (!values.email.includes('@')) {
    errors.email = errorOptions.email.missingAt;
  }
  return errors;
}
