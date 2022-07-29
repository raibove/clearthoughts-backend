export const createUserSQL = `CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(40) NOT NULL UNIQUE
)`;
