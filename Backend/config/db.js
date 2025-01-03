import mongoose from 'mongoose';

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/task2')
        .then(() => {
            console.log("Connection successfully!!");
        })
        .catch((error) => {
            console.log("Error!!", error.message);
        });
};

export default connect;
