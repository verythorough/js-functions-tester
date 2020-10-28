exports.handler = async function(event, context) {
    console.log("Hello from the background")
    setTimeout(() => {  console.log("Goodbye!"); }, 25000);
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Maybe this was synchronous after all"})
    };
}