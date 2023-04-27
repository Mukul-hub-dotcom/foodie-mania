const mongoose = require("mongoose");
const FoodItem = require("./models/foodItem");
const mongoURL =
  "mongodb+srv://foodiemania:foodiemania@cluster0.uaueuhr.mongodb.net/foodie?retryWrites=true&w=majority";

// const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Atlas connected");

    const fetchedData = await mongoose.connection.db.collection("food_items");
    const data = await fetchedData.find({}).toArray();
    if (data.length > 0) {
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
      const catData = await foodCategory.find({}).toArray();
      globalFood = data;
      globalCat = catData;
    } else {
      console.log("No data found in food_items collection");
    }
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas:", error);
  }
};

module.exports = connectToMongoDB;
