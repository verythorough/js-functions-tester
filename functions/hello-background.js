exports.handler = async function(event, context) {
    console.log("called hello")
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}