exports.handler = async function(event, context) {
    console.log("called notreally-background")
    return {
        statusCode: 200,
        body: JSON.stringify({message: "This is a synchronous response"})
    };
}