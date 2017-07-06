/**
 *
 * Created by rootboobie on 6/17/16.
 */
function CalculateTime(busroutetime, currentposition, desireposition) {
    if(currentposition <=0 || desireposition <= 0)
    {
        return 0;
    }
    var totalTime = 0;
    try {

        if (currentposition <= desireposition) {
            for (var i = currentposition - 1; i < desireposition - 1; i++) {
                totalTime += parseFloat( busroutetime[i].time)
            }
        }
        else {
            for (var i = currentposition - 1; i < busroutetime.length; i++) {
                totalTime += parseFloat(busroutetime[i].time)
            }
            for (var i = 0; i < desireposition - 1; i++) {
                totalTime += parseFloat(busroutetime[i].time)
            }
        }
    }
    catch(e){
        console.log(String(e))
    }
        
    return totalTime
}
function GetDistance(lat1, long1, lat2, long2) {
    return Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(long1 - long2, 2))
}

function sqr(x) {
    return x * x
}

function dist2(v, w) {
    return sqr(v.x - w.x) + sqr(v.y - w.y)
}

function distToSegmentSquared(p, v, w) {
    var l2 = dist2(v, w);

    if (l2 == 0) return dist2(p, v);

    var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;

    if (t < 0) return dist2(p, v);
    if (t > 1) return dist2(p, w);

    return dist2(p, {x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y)});
}

function distToSegment(p, v, w) {
    return Math.sqrt(distToSegmentSquared(p, v, w));
}

exports.CalculateTime = CalculateTime
exports.GetDistance = GetDistance
exports.distToSegment = distToSegment



