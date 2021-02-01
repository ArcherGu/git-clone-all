# git-clone-all

## How to use

add your `Personal Access Tokens` and gitlab `url` to `config/config.js` like:

```js
const token = "oJXkmR6XAh6yS9yqay76";
const url = "192.168.1.100:2222";

module.exports = {
  token,
  url,
};
```

and then run:

`npm run clone`
