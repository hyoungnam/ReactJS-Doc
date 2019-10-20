# Conditional Rendering

### Inline If with Logical && Operator
### Inline If-Else with Conditional Operator

### Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return *__null__* instead of its render output
```
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.