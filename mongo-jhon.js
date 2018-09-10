'use strict';
var mongoose = require('mongoose'),
    five = require('johnny-five');
var Schema = mongoose.Schema;


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
var Sensor = mongoose.model('Sensor', SensorSchema);


/*
* Creates a accelerometer snapshot in mongodb from a given instance http://johnny-five.io/api/accelerometer/
*/
var accelerometer = function(accelerometer) {
    var instance = new Accelerometer({id: accelerometer.id,zeroV: accelerometer.zeroV,pitch: accelerometer.pitch,roll: accelerometer.roll,x: accelerometer.x,y: accelerometer.y,z: accelerometer.z,acceleration: accelerometer.acceleration,inclination: accelerometer.inclination,orientation: accelerometer.orientation});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a thermometer snapshot in mongodb from a given instance http://johnny-five.io/api/thermometer/
*/
var thermometer = function(thermometer) {
    var instance = new Thermometer({id: thermometer.id,celsius: thermometer.celsius,fahrenheit: thermometer.fahrenheit,kelvin: thermometer.kelvin});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a gyroscope snapshot in mongodb from a given instance http://johnny-five.io/api/gyro/
*/
var gyro = function(gyro) {
    var instance = new Gyro({id: gyro.id,isCalibrated: gyro.isCalibrated,pitch: gyro.pitch,roll: gyro.roll,yaw: gyro.yaw,rate: gyro.rate,x: gyro.x,y: gyro.y,z: gyro.z });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates an altimeter snapshot in mongodb from a given instance http://johnny-five.io/api/altimeter/
*/
var altimeter = function(altimeter) {
    var instance = new Altimeter({id: altimeter.id, feet: altimeter.feet, meters: altimeter.meters });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a barometer snapshot in mongodb from a given instance http://johnny-five.io/api/barometer/
*/
var barometer = function(barometer) {
    var instance = new Barometer({id: barometer.id, pressure: barometer.pressure, controller: barometer.controller });
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a compass snapshot in mongodb from a given instance http://johnny-five.io/api/compass/
*/
var compass = function(compass) {
    var instance = new Barometer({id: compass.id, raw: { x: compass.raw.x, y: compass.raw.y, z: compass.raw.z}, heading: compass.heading, bearing: { point: compass.bearing.point, abbr: compass.bearing.abbr, low: compass.bearing.low, mid: compass.bearing.mid, high: compass.bearing.high }});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a proximity snapshot in mongodb from a given instance http://johnny-five.io/api/proximity/
*/
var proximity = function(proximity) {
    var instance = new Proximity({id: proximity.id, centimeters: proximity.centimeters, inches: proximity.inches});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

/*
* Creates a relay snapshot in mongodb from a given instance http://johnny-five.io/api/relay/
*/
var relay = function(relay) {
    var instance = new Relay({id: relay.id, isOn: relay.isOn, type: relay.type});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

///////

/*
* Creates a joystick snapshot in mongodb from a given instance http://johnny-five.io/api/joystick/
*/
var joystick = function(joystick) {
    var instance = new Joystick({id: joystick.id, x: joystick.x, y: joystick.y});
    instance.save(function(err) {
        if(err) console.log("Error: " + err);
    });
};

exports.save = function(instance){
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
        case five.Relay:
            relay(instance);
        break;
        case five.Joystick:
            joystick(instance);
        break;
        default:
            console.log("Class type of " + instance.constructor + " not found");
        break;
    }
}
