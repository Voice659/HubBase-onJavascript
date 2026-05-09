var P1 = function (repeats) {
    for (var i = 0; i < repeats; i++){
        console.log(i + ". =^.^=")
    }
}

var P2 = function (){
    var SecInMin = 60
    var MinInHour = 60
    var SecInHour = SecInMin * MinInHour
    var HourInDay = 24
    var SecInDay = SecInHour * HourInDay
    var MinInDay = MinInHour * HourInDay
    var DayInWeek = 7
    var SecInWeek = SecInDay * DayInWeek
    var MinInWeek = MinInDay * DayInWeek
    var HourInWeek = HourInDay * DayInWeek
    console.log("There are "+SecInMin+" seconds in a minute")
    console.log("There are "+MinInHour+" minutes in an hour")
    console.log("There are "+SecInHour+" seconds in an hour")
    console.log("There are "+HourInDay+" hours in a day")
    console.log("There are "+SecInDay+" seconds in a day")
    console.log("There are "+MinInDay+" minutes in a day")
    console.log("There are "+DayInWeek+" days in a week")
    console.log("There are "+SecInWeek+" seconds in a week")
    console.log("There are "+MinInWeek+" minutes in a week")
    console.log("There are "+HourInWeek+" hours in a week")
}

console.log("HubBase-onJS 0.0.1.0.00 (default, May 09 2026, 21:59:14)")
P1(10)
P2()