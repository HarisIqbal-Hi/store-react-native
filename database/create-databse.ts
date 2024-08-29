import CustomFormType from "@/types/create/CustomFormType";
import { db } from "./main";
import { databaseString } from "@/constants";

export const setCustomData = async (data: CustomFormType) => {
    const { itemName } = data;
    const database = await db;
    try {
      const existingItem = await database.getFirstAsync(
        `SELECT * FROM ${databaseString.customTableName} WHERE item_name = ? `,
        [itemName]
      ) as CustomFormType
  
      if (existingItem && data.id !== undefined) {
          // updateCustomData(data)
          await Promise.all(
              data.weightPrice.map(({ price, weight, weightUnit, id }) =>
                  insertOrUpdateWeightPriceVariant(data.id!!, weight, price, weightUnit, id!!)
              )
          );
      } else if (!existingItem) {
          insetCustomData(data)
      }else {
          return
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  
  export const insetCustomData = async (data: CustomFormType) => {
    const { itemName, weightPrice } = data;
    console.log("insert custom data", data);
    const database = await db;
    try {
      const insertCustom = await database.runAsync(
        `INSERT INTO ${databaseString.customTableName} (item_name) VALUES (?);`,
        [itemName]
      );
  
      const item_id = insertCustom.lastInsertRowId;
  
      const insertWeightPrice = await database.prepareAsync(
        `INSERT INTO ${databaseString.weightPriceTableName} (item_id, weight, price, weight_unit) VALUES (?, ?, ?, ?);`
      );
  
      await Promise.all(
        weightPrice.map(({ price, weight, weightUnit }) =>
          insertWeightPrice.executeAsync([item_id, weight, price, weightUnit])
        )
      );
  
     
    } catch (err) {
      console.log("error", err);
    }
  };
  
  const insertOrUpdateWeightPriceVariant = async (itemId: number, weight: number,price: number,weightUnit: string, variantId:number) => {
      const database = await db
      // Check if the variant exists
      const existingVariant = await database.runAsync(`SELECT * FROM ${databaseString.weightPriceTableName} WHERE item_id = ? AND id = ?;`, [itemId, variantId]);
  
      if (existingVariant) {
          // Variant exists, update it
          await database.runAsync(
              'UPDATE table_weightprice SET weight = ?, price = ?, weight_unit = ? WHERE item_id = ? AND id = ?;',
              [weight, price, weightUnit, itemId, variantId]
          );
      } else {
          // Variant does not exist, insert it
          await database.runAsync(
              'INSERT INTO table_weightprice (item_id, weight, price, weight_unit) VALUES (?, ?, ?, ?);',
              [itemId, weight, price, weightUnit]
          );
      }
  };
  