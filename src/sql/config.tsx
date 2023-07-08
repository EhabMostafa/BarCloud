import SQLite from "react-native-sqlite-storage"

const errorCB = (err: any) => {
    console.log("SQL Error: " + err);
}

const successCB = (err: any) => {
    console.log("SQL executed fine");
}


const openCB = () => {
    console.log("Database OPENED");
}


const db = SQLite.openDatabase({ name: "BarCloud.db" }, openCB, errorCB);

const createTable = (tableName: string, tableData: string) => {

    let query = `CREATE TABLE IF NOT EXISTS ${tableName} (${tableData});`

    console.log("Ehab test : ", query)
    db.transaction((tx) => {
        tx.executeSql(query, [], (tx, results) => {
            console.log("\n results: ", results)
        })
    })


}

export const initDataBaseTables = () => {
    //Create Models Table

    createTable(
        "Models",
        `
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Code varchar(255),
        Type  varchar(255),
        Cost DECIMAL(10,2),
        Category varchar(255),
        Add_Description varchar(255),
        Img_Link varchar(255)
        `
    )

    createTable(
        "Notes",
        `
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserName varchar(255),
        Date  DATETIME,
        Details varchar(255),
        ModelID INTEGER FOREIGN KEY REFERENCES Models(ID)
        `
    )


}


