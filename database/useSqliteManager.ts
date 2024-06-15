import { useReducer, useCallback, useEffect } from "react";
import { createTable, insetCustomData } from "./database";
import CustomFormType from "@/types/create/CustomFormType";
import { databaseString } from "@/constants";

export type State = {
  tableCreated: boolean;
  customData: Array<CustomFormType>
};

enum ActionType {
  CREATE_TABLE,
  SET_ALL_CUSTOM_DATA,
  GET_ALL_CUSTOM_DATA
}

export const initialState: State = {
  tableCreated: false,
  customData: []
};

type Action =
  | { type: ActionType.CREATE_TABLE, payload: { tableCreated: boolean } }
  | {type: ActionType.GET_ALL_CUSTOM_DATA, playload: {customData: Array<CustomFormType>}}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_TABLE:
      return { ...state, tableCreated: action.payload.tableCreated };

    default:
      return initialState;
  }
};

export default function useSqliteManager(): {
  states: State;
  handleInsertCustomData: (data: CustomFormType) => void;
  handleGetAllCustomData: () => void
} {
  useEffect(() => {
    const createTables = async () => {
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
        createTable("table_company", talbeCompanyInformation),
        createTable("table_company_items", tableCompanyItemsInformation),
      ]);
    };
    createTables().then()
  }, []);

  const [states, dispatch] = useReducer(reducer, initialState);

  const handleInsertCustomData = useCallback(async (data: CustomFormType) => {
    console.log("data", data);
    await insetCustomData(data)
    dispatch({
      type: ActionType.CREATE_TABLE,
      payload: {
        tableCreated: true,
      },
    });
  }, []);

  const handleGetAllCustomData = useCallback( async () => {
   
    dispatch({
      type: ActionType.CREATE_TABLE,
      payload: {
        tableCreated: true,
      },
    });
    return []
  }, []);

  return { states, handleInsertCustomData, handleGetAllCustomData };
}
