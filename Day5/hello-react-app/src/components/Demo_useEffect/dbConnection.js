// simple function
export function dbConnection(){
    return{
        connect: () => {
            console.log('DB Connection opened!');
        },
        disconnect: () => {
            console.log('Closing DB Connection!');
        }
    }
}