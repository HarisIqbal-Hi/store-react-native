import { createTable } from "@/database/database";
import { databaseString } from "@/constants";

export const createTables = async () => {
        const tableCustomInformation = `
              id INTEGER PRIMARY KEY AUTOINCREMENT, 
              item_name TEXT`;
        const tableWeightPriceInformation = `
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              item_id INTEGER,
              weight INTEGER,
              price REAL,
              weight_unit TEXT,
              FOREIGN KEY (item_id) REFERENCES table_custom(id) ON DELETE CASCADE`;
        const talbeCompanyInformation = `
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              company_name TEXT
        `;
        const tableCompanyItemsInformation = `
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              company_id INTEGER,
              item_name TEXT,
              weight REAL,
              price REAL,
              weight_unit TEXT,
              FOREIGN KEY (company_id) REFERENCES table_company(id) ON DELETE CASCADE
        `;
  
        await Promise.all([
          createTable(databaseString.customTableName, tableCustomInformation),
          createTable(databaseString.weightPriceTableName, tableWeightPriceInformation),
          createTable(databaseString.companyTableName, talbeCompanyInformation),
          createTable(databaseString.companyItemsTableName, tableCompanyItemsInformation),
        
        ]);
}