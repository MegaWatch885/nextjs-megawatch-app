import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("Invalid/Missing enviroment variable: 'MONGODB_URI' ")
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise

if (process.env.NODE_ENV === "development") {
    if(!global._mongClientPromise) {
        client= new MongoClient(uri, options)
        global._mongClientPromise = client.connect()

    }
    clientPromise = global._mongClientPromise

} else {

    client = new MongoClient(uri, options)
    clientPromise = client.connect()

}

export default clientPromise