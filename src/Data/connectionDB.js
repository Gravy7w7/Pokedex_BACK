import { connect } from 'mongoose';

export function connectionDB(){
    const MONGO_HOST = "140.84.187.91:27017";
    const MONGO_DB = "pokedex";

    const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`;

    connect(URI, {})
    .then(
        () => {
            console.log("Connection success");
        },
        (err) => {
            console.log("Connection wrong");
        }        
    )
}
