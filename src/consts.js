const ONE_HOUR = 3600;
const GENDER = {
    FEMALE: 'female',
    MALE: 'male',
};
const USERS_PER_PAGE = 10;
const RES_MSG = {
    USER_REGISTERED: 'Пользователь был успешно зарегистрирован',
    USER_ALREADY_EXISTS: 'Пользователь уже существует',
    USER_DOES_NOT_EXISTS: 'Пользователь не существует',
    ACCESS_DENIED: 'Доступ запрещен',
    USER_UPDATED: 'Данные пользователя были успешно обновлены',
};
const STATUS = {
    OK: 'ok',
    ERROR: 'error',
}

module.exports = {
    ONE_HOUR,
    GENDER,
    STATUS,
    RES_MSG,
    USERS_PER_PAGE,
};
