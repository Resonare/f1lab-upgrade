export const validate = (name, password) => {
  let errors = {};
  if (!name) {
    errors.name = "Это обязательное поле";
  }

  if (!password) {
    errors.password = "Введите пароль";
  } else if (password.length < 8) {
    errors.password = "Минимальная длина пароля 8 символов";
  }

  return Object.keys(errors).length ? errors : null;
};
