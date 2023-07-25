console.log('Loading function');

exports.handler = async (event, context) => {
    try {
         var currentDate = new Date().toLocaleDateString("en-US");
         return currentDate;  
    } catch (e) {
        return "Something went wrong please try again.";
    }
   
};