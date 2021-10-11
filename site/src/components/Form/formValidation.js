const errorOptions = {
  name: {
    empty: 'name must be provided',
    notAllLetter: 'name must contain only letters',
    shortName: 'name must have at least 3 characters',
  },
  email: {
    empty: 'email must be provided',
    invalidEmail: 'please provide a valid email address',
  },
  content: {
    empty: 'description must be provided',
  },
};

export default function formValidation({ values }) {
  let errors = {};
  if (values.name.trim().length === 0) {
    errors.name = errorOptions.name.empty;
  }
  if (values.name.replace(/[ -]+/g, '').length < 3) {
    errors.name = errorOptions.name.shortName;
  }
  if (!/^[A-Za-z]+$/.test(values.name.replace(' ', ''))) {
    errors.name = errorOptions.name.notAllLetter;
  }
  if (values.email.length === 0) {
    errors.email = errorOptions.email.empty;
  }
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
    errors.email = errorOptions.email.invalidEmail;
  }
  if (values.content.replace(' ', '').length === 0) {
    errors.content = errorOptions.content.empty;
  }

  return errors;
}
