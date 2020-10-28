exports.handler = async function(event, context) {
    console.log("Hello from the background")
    setTimeout(() => {  console.log("Goodbye!"); }, 25000);
}