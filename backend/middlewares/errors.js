const errors = (err, req, res, next) => {
  if (!err.statusCode) {
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  } else if (err.code === 11000) {
    res.status(409).send({ message: 'Пользователь с такой почтой уже зарегестрирован' });
    return;
  } else {
    res.status(err.statusCode).send({ message: err.message });
  }
  next();
};

module.exports = errors;
