$(document).ready(function() {
    var c = document.createElement('canvas'),        
    ctx = c.getContext('2d'),
    cw = c.width = 200,
    ch = c.height = 200;

for( var x = 0; x < cw; x++ ){
    for( var y = 0; y < ch; y++ ){
        ctx.fillStyle = 'hsl(0, 0%, ' + ( 100 - ( Math.random() * 15 ) ) + '%)';
        ctx.fillRect(x, y, 1, 1);
    }
}

document.getElementById('bg1').style.background = 'url(' + c.toDataURL() + ')';
});