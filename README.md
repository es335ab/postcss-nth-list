# postcss-nth
A postcss module for picking items from a var list


## input
```
:root{
    --aVar: lime;
    --myList: "a-string" var(--aVar) 100,234,190 red;

    --string: nth(var(--myList), 0);
    --var: nth(var(--myList), 1);
    --rgb: nth(var(--myList), 2);
    --color: nth(var(--myList), 3);
}

body{
    background: nth(var(--myList), 3);
    color: rgb( var(--rgb) );
    border-color: var(--var);
    content: var(--string);
}

```

## output
```
body{
    background: red;
    color: rgb( 100,234,190 );
    border-color: lime;
    content: "a-string";
}
```