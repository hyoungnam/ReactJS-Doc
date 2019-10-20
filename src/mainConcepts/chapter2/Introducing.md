# Introducing

### Why JSX?
### Embedding Expressions in JSX
### You can put any valid JavaScript expression inside the curly braces in JSX
### JSX is an Expression Too
### Specifying Attributes with JSX
```
const element = <div tabIndex="0"></div>;
```
```
const element = <img src={user.avatarUrl}></img>;
### JSX Prevents Injection Attacks
It is safe to embed user input in JSX:
```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

### Warning: class becomes className in JSX, and tabindex becomes tabIndex.