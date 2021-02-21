# ForceReq()
**Require module but with error handeling**
___
Instalation

```bash
$ npm i forcereq
```

Using ForceReq()

```javascript
// ForceReq -----------------------------
const { ForceReq } = require("forcereq");

// Other modules ------------------------
const { BigWiggle } = ForceReq("bigwiggle") // no error
const data = ForceReq("./cutecat.json") // Console: Err ForceReq(): The file "./cutecat.json" could not be loaded.
```
