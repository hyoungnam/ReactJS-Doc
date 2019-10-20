# Components and Props

### Function and Class Component

### Rendering a Component

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### Composing Components

### Extracting Components

### Props are Read-Only

All React components must act like pure functions with respect to their props.