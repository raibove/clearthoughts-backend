export const createUserSQL = `CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(40) NOT NULL UNIQUE
)`;

export const createQuestionSQL = `CREATE TABLE IF NOT EXISTS question(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    title VARCHAR(400) NOT NULL,
    description VARCHAR(400)
)`;

export const createAnswerSQL = `CREATE TABLE IF NOT EXISTS answer(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    userId INT NOT NULL,
    answer1 VARCHAR(400),
    answer2 VARCHAR(400),
    answer3 VARCHAR(400),
    answer4 VARCHAR(400),
    answer5 VARCHAR(400),
    answer6 VARCHAR(400),
    version INT NOT NULL
)`;

