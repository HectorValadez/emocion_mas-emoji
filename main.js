var modelo =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iDeLznfEt/model.json",obiwan);
Webcam.set({
    width: 300,
    height: 250,
    image_format:"png",
    png_quality:90 
});
Webcam.attach("#camara");
function tijera() {
    Webcam.snap(function (ip) {
        document.getElementById("cara").innerHTML='<img src="'+ip+'" id="foto">'

    })
}
function papel() {
    var foto =document.getElementById("foto");
    modelo.classify(foto,Tony);
}
function obiwan() {
    console.log ("No dejes que tus emociones nublen tu vista")

}
function Tony(error,resultados) {
    if (!error) {
        console.log(resultados)
        var emocion1=resultados[0].label
        var emocion2=resultados[1].label
        var emoji1=descubrir_emoji(emocion1)
        var emoji2=descubrir_emoji(emocion2)
        document.getElementById("emocion").innerHTML=emoji1+" "+emocion1+ " o " +emocion2+emoji2
    }
}
function descubrir_emoji(emocion) {
    if (emocion=="feliz") {
        emoji="😁"
    }
    else if (emocion=="serio") {
        emoji="😑"
    }
    else if (emocion=="pensativo") {
        emoji="🤨"
    }
    else if (emocion=="la roca") {
        emoji="🤔"
    }
    else if (emocion=="enojado") {
        emoji="😡"
    }
    else if (emocion=="sorprendido") {
        emoji="😧"
    }
    return emoji
}