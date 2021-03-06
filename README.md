# Mongo-John

> Simple and powerful Big Data and IoT, this API combines the power of MongoDB (with mongoose) and JhonnyFive

  - Easy data persistence with mongoDB.
  - All JhonnyFive components as mongoose Schema.
  - JhonnyFive components from stored data.
  
# Lastest Features!
  
  - Basic Schema for each component.
  - Simple function to take a snapshot of a component state.
  - Great vision of new implementations, keep updated, roadmap soon.
  

### Requeriments

Just this libraries are required to work properly:

* [node.js] - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [mongoose] - Elegant mongodb object modeling for node.js

An instance of MongoDBS running is required to connect mongoose library.

### Installation

Mongo-John requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```
$ npm install mongo-john --save
```

mongoose install required
```
$ npm install mongoose --save
```

Import johnny-five and mongo-john

```
var five = require("johnny-five"),
    mj = require('mongo-john'),
    mongoose = require('mongoose');
  
```

Initialize DB connection

```

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/JohnnyFive');

```

And start storing data (the following call) mj.save(instance) uses the JhonnyFive component instance, it parse all data to a model (using a Schema) and save it to de mongoDBS

```

var barometer = new five.Barometer({
    controller: "BMP180"
});
barometer.on("change", function() {
    mj.save(this);
});

var joystick = new five.Joystick({
    // [ x, y ]
    pins: ["A1", "A2"]
});
joystick.on("change", function() {
    mj.save(this);
});

```

After two 'joystick' changes...

![Alt text](https://github.com/Mcklem/Mongo-John/blob/master/readme/images/Joystick-sample.png)

### Development

Do you Want to contribute? 

Follow the project and create a pull request, all help is welcome.

### Todos

 - Methods to extract and use some data as component or component parts (e.g Segment for animations ) 
 - Data access controll for each component
 
### Conclusion

 - Use it to IoT, Machine Learning or Big Data, forget wasting time onto models.


License
----

>**MIT**
>Free Software, All by everyone, all to everyone



