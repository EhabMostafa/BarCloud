import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({ name: 'BarCloud.db', location: 'default' });
};


export const createTable = async (db: SQLiteDatabase, tableName: string, tableData: string) => {

    let query = `CREATE TABLE IF NOT EXISTS ${tableName} (${tableData});`

    console.log("Ehab test create table : ", query)
    await db.executeSql(query);

}


export const getModels = async (db: SQLiteDatabase, name?: string): Promise<any> => {
    try {
        const models: any = [];
        let query = `select * from Models ${name ? `where Name LIKE '%${name}%'` : ``}`
        const results = await db.executeSql(query);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                models.push(result.rows.item(index))
            }
        });
        return models;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get models !!!');
    }
};


export const insertNewModel = async (
    db: SQLiteDatabase,
    name: string,
    code: string,
    type: string,
    cost: number,
    category: string,
    desc: string,
    img: string
) => {

    let query = `INSERT INTO Models (Name, Code, Type, Cost, Category, Add_Description, Img_Link)
    VALUES ('${name}','${code}', '${type}', '${cost}', '${category}', '${desc}', '${img}');`

    console.log("Ehab test insert query : ", query)
    return db.executeSql(query);

}

export const insertNewNote = async (
    db: SQLiteDatabase,
    userName: string,
    note: string,
    date: Date,
    modelID: number,
) => {

    let query = `INSERT INTO Notes (UserName, Details, Date, ModelID)
    VALUES ('${userName}','${note}', '${date}', '${modelID}');`

    console.log("Ehab test insert query : ", query)
    return db.executeSql(query);

}

export const getNotesByModelID = async (db: SQLiteDatabase, id?: number): Promise<any> => {
    try {
        const models: any = [];
        let query = `select * from Notes where ModelID=${id} ORDER BY Date DESC`
        const results = await db.executeSql(query);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                models.push(result.rows.item(index))
            }
        });
        return models;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get models !!!');
    }
};


export const initDataBaseTables = async () => {
    //Create Models Table
    const db = await getDBConnection();

    const x = await createTable(
        db,
        "Models",
        `
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name varchar(255),
        Code varchar(255),
        Type  varchar(255),
        Cost DECIMAL(10,2),
        Category varchar(255),
        Add_Description varchar(255),
        Img_Link varchar(255)
        `
    )

    createTable(
        db,
        "Notes",
        `
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserName varchar(255),
        Date  DATETIME,
        Details varchar(255),
        ModelID INTEGER ,
        FOREIGN KEY (ModelID) REFERENCES Models(ID)
        `
    )

    const storedModels = await getModels(db);

    if (storedModels.length == 0) {
        await initModelData(db)
    }





}


const initModelData = async (db: SQLiteDatabase) => {
    //Create Models Data

    await insertNewModel(db, "Printer HS", "GT2000", "EPSON", 125.50, "Printers", "Black", "Printer HS")
    await insertNewModel(db, "LCD XS", "HT1000", "Asus", 225.50, "Monitors", "IPS", "LCD XS")
    await insertNewModel(db, "Laptops", "Corei9", "Dell", 1025.50, "PCS", "144HZ", "Laptops")
    await insertNewModel(db, "Printer Inc", "GT2000", "GT2000", 0, "", "", "Printer Inc")




}


