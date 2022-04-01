import { Db, MongoClient } from 'mongodb'

let database: Db

export function connect(connectionString: string): void {
    const client = new MongoClient(connectionString)
    client
        .connect()
        .then(() => {
            console.log('Successfully connected to MongoDB.')
            database = client.db()
        })
        .catch(console.error)
}

export function getDatabase(): Db {
    return database
}
