'use strict';
var mongoose = require('mongoose'),
    five = require('johnny-five');
var Schema = mongoose.Schema;

//plugins
function timestamp(schema, settings) {
    if(settings && settings.timestamp == false)  {
        next();
    }
    else{
        schema.add({ 
            timestamp: Date
        });
        schema.pre('save', function (next) {
            this.timestamp = Date.now();
            next();
        });
    }
}

var AccelerometerSchema = new Schema({

    id: {
        type: String,
        required: false
    },
    zeroV: {
        type: Number,
        required: false
    },
    pitch: {
        type: Number,
        required: false
    },
    roll: {
        type: Number,
        required: false
    },
    x: {
        type: Number,
        required: false
    },
    y: {
        type: Number,
        required: false
    },
    z: {
        type: Number,
        required: false
    },
    acceleration: {
        type: Number,
        required: false
    },
    inclination: {
        type: Number,
        required: false
    },
    orientation: {
        type: Number,
        required: false
    }
});
AccelerometerSchema.plugin(timestamp);
var Accelerometer = mongoose.model('Accelerometer', AccelerometerSchema);

var ThermometerSchema = new Schema({

    id: {
        type: String,
        required: false
    },
    celsius: {
        type: Number,
        required: false
    },
    fahrenheit: {
        type: Number,
        required: false
    },
    kelvin: {
        type: Number,
        required: false
    }
});
ThermometerSchema.plugin(timestamp);
var Thermometer = mongoose.model('Thermometer', ThermometerSchema);

var GyroSchema = new Schema({

    id: {
        type: String,
        required: false
    },
    isCalibrated: {
        type: Boolean,
        required: false
    },
    pitch: {
        rate: Number,
        angle: Number,
        required: false
    },
    roll: {
        rate: Number,
        angle: Number,
        required: false
    },
    yaw: {
        rate: Number,
        angle: Number,
        required: false
    },
    rate: {
        x: Number,
        y: Number,
        z: Number,
        required: false
    },
    x: {
        type: Number,
        required: false
    },
    y: {
        type: Number,
        required: false
    },
    z: {
        type: Number,
        required: false
    }
});
GyroSchema.plugin(timestamp);
var Gyro = mongoose.model('Gyro', GyroSchema);

var AltimeterSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    feet: { 
        type: Number, 
        required: false 
    },
    meters: { 
        type: Number, 
        required: false 
    },
});
AltimeterSchema.plugin(timestamp);
var Altimeter = mongoose.model('Altimeter', AltimeterSchema);

var BarometerSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pressure: { 
        type: Number, 
        required: false 
    },
    controller: { 
        type: String, 
        required: false 
    }
});
BarometerSchema.plugin(timestamp);
var Barometer = mongoose.model('Barometer', BarometerSchema);

var CompassSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    raw: { 
        x: {type: Number},
        y: {type: Number},
        z: {type: Number}, 
        required: false 
    },
    heading: { 
        type: Number, 
        required: false 
    },
    bearing: { 
        point: { 
            type: String, 
            required: false 
        },
        abbr: { 
            type: String, 
            required: false 
        },
        low: { 
            type: Number, 
            required: false 
        },
        mid: { 
            type: Number, 
            required: false 
        },
        high: { 
            type: Number, 
            required: false 
        }
    }
});
CompassSchema.plugin(timestamp);
var Compass = mongoose.model('Compass', CompassSchema);

var ProximitySchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    centimeters: { 
        type: Number, 
        required: false 
    },
    inches: { 
        type: Number, 
        required: false 
    }
});
ProximitySchema.plugin(timestamp);
var Proximity = mongoose.model('Proximity', ProximitySchema);

var RelaySchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    isOn: { 
        type: Boolean, 
        required: false 
    },
    type: { 
        type: String, 
        required: false 
    }
});
RelaySchema.plugin(timestamp);
var Relay = mongoose.model('Relay', RelaySchema);

var GPSSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    latitude: { 
        type: Number, 
        required: false 
    },
    longitude: { 
        type: Number, 
        required: false 
    },
    altitude: { 
        type: Number, 
        required: false 
    },
    sat: { 
        type: String, 
        required: false 
    },
    course: { 
        type: Number, 
        required: false 
    },
    speed: { 
        type: Number, 
        required: false 
    },
    time: { 
        type: Number, 
        required: false 
    }
});
GPSSchema.plugin(timestamp);
var GPS = mongoose.model('GPS', GPSSchema);

var ServoSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pin: { 
        type: Number, 
        required: false 
    },
    range: { 
        type: Number, 
        required: false 
    },
    invert: { 
        type: Boolean, 
        required: false 
    },
    history: { 
        type: [Number], 
        required: false 
    },
    interval: { 
        type: Number, 
        required: false 
    },
    isMoving: { 
        type: Number, 
        required: false 
    },
    last: { 
        type: Number, 
        required: false 
    },
    position: { 
        type: Number, 
        required: false 
    },
    value: { 
        type: Number, 
        required: false 
    },
    startAt: { 
        type: Number, 
        required: false 
    }
});
ServoSchema.plugin(timestamp);
var Servo = mongoose.model('Servo', ServoSchema);

var JoystickSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    x: { 
        type: Number, 
        required: false 
    },
    y: { 
        type: Number, 
        required: false 
    }
});
JoystickSchema.plugin(timestamp);
var Joystick = mongoose.model('Joystick', JoystickSchema);

var LightSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pin: { 
        type: Number, 
        required: false 
    },
    threshold: { 
        type: Number, 
        required: false 
    },
    value: { 
        type: Number, 
        required: false 
    },
    level: { 
        type: Number, 
        required: false 
    }
});
LightSchema.plugin(timestamp);
var Light = mongoose.model('Light', LightSchema);

var HygrometerSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    relativeHumidity: { 
        type: Number, 
        required: false 
    }
});
HygrometerSchema.plugin(timestamp);
var Hygrometer = mongoose.model('Hygrometer', HygrometerSchema);

var MotionSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pin: { 
        type: Number, 
        required: false 
    },
    value: { 
        type: Number, 
        required: false 
    },
    detectedMotion: { 
        type: Boolean, 
        required: false 
    },
    isCalibrated: { 
        type: Boolean, 
        required: false 
    }
});
MotionSchema.plugin(timestamp);
var Motion = mongoose.model('Motion', MotionSchema);

//Animation segment
var SegmentSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    duration:{ 
        type: Number, 
        required: false 
    },
    cuePoints:{ 
        type: [Number], 
        min: 0.0,
        max: 1.0,
        required: false 
    },
    keyFrames:{ 
        type: [Schema.Types.Mixed], 
        required: false 
    },
    easing:{ 
        type: String, 
        required: false 
    },
    loop:{ 
        type: Boolean, 
        required: false 
    },
    loopback:{ 
        type: Number, 
        required: false 
    },
    metronomic:{ 
        type: Boolean, 
        required: false 
    },
    progress:{ 
        type: Number, 
        required: false 
    },
    currentSpeed:{ 
        type: Number, 
        required: false 
    },
    fps:{ 
        type: Number, 
        required: false 
    }
});
SegmentSchema.plugin(timestamp);
var Segment = mongoose.model('Segment', SegmentSchema);

var SensorSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pin: { 
        type: Number, 
        required: false 
    },
    threshold: { 
        type: Number, 
        required: false 
    },
    boolean: { 
        type: Boolean, 
        required: false 
    },
    raw: { 
        type: Number, 
        required: false 
    },
    analog: { 
        type: Number, 
        required: false 
    },
    constrained: { 
        type: Number, 
        required: false 
    },
    value: { 
        type: Number, 
        required: false 
    }
});
SensorSchema.plugin(timestamp);
var Sensor = mongoose.model('Sensor', SensorSchema);

var SwitchSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pin: { 
        type: Number, 
        required: false 
    },
    isClosed: { 
        type: Boolean, 
        required: false 
    },
    isOpen: { 
        type: Boolean, 
        required: false 
    }
});
SwitchSchema.plugin(timestamp);
var Switch = mongoose.model('Switch', SwitchSchema);

var StepperSchema = new Schema({
    id:{ 
        type: String, 
        required: false 
    },
    pins:{
        type: [Number], 
        required: false 
    },
    rpm: { 
        type: Number, 
        required: false 
    },
    direction: { 
        type: Boolean, 
        required: false 
    },
    speed: { 
        type: Boolean, 
        required: false 
    },
    accel: { 
        type: Boolean, 
        required: false 
    },
    decel: { 
        type: Boolean, 
        required: false 
    }
});
var Stepper = mongoose.model('Stepper', StepperSchema);

/*
* Creates an 'Accelerometer' snapshot in mongodb from a given instance http://johnny-five.io/api/accelerometer/
*/
var accelerometer = function(accelerometer) {
    var instance = new Accelerometer({id: accelerometer.id,zeroV: accelerometer.zeroV,pitch: accelerometer.pitch,roll: accelerometer.roll,x: accelerometer.x,y: accelerometer.y,z: accelerometer.z,acceleration: accelerometer.acceleration,inclination: accelerometer.inclination,orientation: accelerometer.orientation});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Thermometer' snapshot in mongodb from a given instance http://johnny-five.io/api/thermometer/
*/
var thermometer = function(thermometer) {
    var instance = new Thermometer({id: thermometer.id,celsius: thermometer.celsius,fahrenheit: thermometer.fahrenheit,kelvin: thermometer.kelvin});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Gyroscope' snapshot in mongodb from a given instance http://johnny-five.io/api/gyro/
*/
var gyro = function(gyro) {
    var instance = new Gyro({id: gyro.id,isCalibrated: gyro.isCalibrated,pitch: gyro.pitch,roll: gyro.roll,yaw: gyro.yaw,rate: gyro.rate,x: gyro.x,y: gyro.y,z: gyro.z });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates an 'Altimeter' snapshot in mongodb from a given instance http://johnny-five.io/api/altimeter/
*/
var altimeter = function(altimeter) {
    var instance = new Altimeter({id: altimeter.id, feet: altimeter.feet, meters: altimeter.meters });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Barometer' snapshot in mongodb from a given instance http://johnny-five.io/api/barometer/
*/
var barometer = function(barometer) {
    var instance = new Barometer({id: barometer.id, pressure: barometer.pressure, controller: barometer.controller });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Compass' snapshot in mongodb from a given instance http://johnny-five.io/api/compass/
*/
var compass = function(compass) {
    var instance = new Barometer({id: compass.id, raw: { x: compass.raw.x, y: compass.raw.y, z: compass.raw.z}, heading: compass.heading, bearing: { point: compass.bearing.point, abbr: compass.bearing.abbr, low: compass.bearing.low, mid: compass.bearing.mid, high: compass.bearing.high }});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Proximity' snapshot in mongodb from a given instance http://johnny-five.io/api/proximity/
*/
var proximity = function(proximity) {
    var instance = new Proximity({id: proximity.id, centimeters: proximity.centimeters, inches: proximity.inches});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Relay' snapshot in mongodb from a given instance http://johnny-five.io/api/relay/
*/
var relay = function(relay) {
    var instance = new Relay({id: relay.id, isOn: relay.isOn, type: relay.type});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'GPS' snapshot in mongodb from a given instance http://johnny-five.io/api/gps/
*/
var gps = function(gps) {
    var instance = new GPS({id: gps.id, latitude: gps.latitude, longitude: gps.longitude, altitude: gps.altitude, sat: gps.sat, course: gps.course, speed: gps.speed, time: gps.time });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Servo' snapshot in mongodb from a given instance http://johnny-five.io/api/servo/
*/
var servo = function(servo) {
    var instance = new Servo({id: servo.id, pin: servo.pin, range: servo.range, invert: servo.invert, history: servo.history, interval: servo.interval, isMoving: servo.isMoving, last: servo.last, position: servo.position, value: servo.value, startAt: servo.startAt});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Joystick' snapshot in mongodb from a given instance http://johnny-five.io/api/joystick/
*/
var joystick = function(joystick) {
    var instance = new Joystick({id: joystick.id, x: joystick.x, y: joystick.y});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Light' snapshot in mongodb from a given instance http://johnny-five.io/api/light/
*/
var light = function(light) {
    var instance = new Light({id: light.id, pin: light.pin, threshold: light.threshold, value: light.value, level: light.level});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Hygrometer' snapshot in mongodb from a given instance http://johnny-five.io/api/hygrometer/
*/
var hygrometer = function(hygrometer) {
    var instance = new Hygrometer({id: hygrometer.id, relativeHumidity: hygrometer.relativeHumidity});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Switch' snapshot in mongodb from a given instance http://johnny-five.io/api/switch/
*/
var swtch = function(swtch) {
    var instance = new Switch({id: swtch.id, pin: swtch.pin, isClosed: swtch.isClosed, isOpen: swtch.isOpen});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a 'Stepper' snapshot in mongodb from a given instance http://johnny-five.io/api/switch/
*/
var stepper = function(stepper) {
    var instance = new Stepper({id: stepper.id, pins: stepper.pins, rpm: stepper.rpm, direction: stepper.direction, speed: stepper.speed, accel: stepper.accel, decel: stepper.decel});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

exports.save = function(instance, settings){
    switch(instance.constructor){

        case five.Accelerometer:
            accelerometer(instance);
            break;
        case five.Thermometer:
            thermometer(instance);
            break;
        case five.Gyro:
            gyro(instance);
            break;
        case five.Altimeter:
            altimeter(instance);
            break;
        case five.Barometer:
            barometer(instance);
            break;
        case five.Compass:
            compass(instance);
            break;
        case five.Proximity:
            proximity(instance);
            break;
        case five.GPS:
            gps(instance);
            break;
        case five.Servo:
            servo(instance);
            break;
        case five.Relay:
            relay(instance);
            break;
        case five.Joystick:
            joystick(instance);
            break;
        case five.Light:
            light(instance);
            break;
        case five.Hygrometer:
            hygrometer(instance);
            break;
        case five.Switch:
            swtch(instance);
            break;
        case five.Stepper:
            stepper(instance);
            break;
        default:
            console.log("Class type of " + instance.constructor + " not found");
            break;
    }
}
