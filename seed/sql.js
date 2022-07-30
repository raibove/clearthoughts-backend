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

