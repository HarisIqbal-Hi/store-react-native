import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseAsync("lassani");

export const createTable = async (
  tableName: string,
  tableInformation: string
) => {
  const database = await db;
  try {
    const execute = await database.execAsync(`
            CREATE TABLE IF NOT EXISTS ${tableName} (${tableInformation})
            `);

    console.log("create table", execute);
  } catch (err) {
    console.log("error", err);
  }
};