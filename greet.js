// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

const helloMessageCall = say.call(helloMessage, 'John');
const heyThereMessageApply = say.apply(heyThereMessage, ['Michael']);

helloMessageCall;
heyThereMessageApply;
