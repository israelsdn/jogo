var alturaB = 70
var larguraB = 300
var xBMenu = 100
var yB1Menu = 200
var yB2Menu = 300
var yB3Menu = 400

var tela
var diff

var ImgInstrucoes
var ImgCreditos
var imgFundo
var FundoJogo
var fly = []
var pont = 0
var recorde

var NumResp
var calc = []
var veloWitch
var velocidade
var pos = 0
var pos1 = 500
var Ywitch = 100
var tempFly = 0
var contFly = 0
var xobstaculo = []
var yobstaculo = []
var xresposta, yresposta

function preload() {
  imgFundo = loadImage('fundo.jpg')
  fontrael = loadFont('Fontes/Rael.ttf')
  fly[0] = loadImage('Bruxinha/WF1.png')
  fly[1] = loadImage('Bruxinha/WF2.png')
  fly[2] = loadImage('Bruxinha/WF3.png')
  fly[3] = loadImage('Bruxinha/WF4.png')
  FundoJogo = loadImage('FundoJogo.png')
  ImgCreditos = loadImage('creditos.png')
  ImgInstrucoes = loadImage('instrucoes.png')
}

function setup() {
  createCanvas(500, 500);
  tela = 0
  diff = 0
  xresposta = random(500, 700)
  yresposta = random(15, 355)
  xobstaculo[1] = random(500, 700)
  yobstaculo[1] = random(15, 355)
  xobstaculo[2] = random(500, 700)
  yobstaculo[2] = random(15, 355)
  velocidade = 1
  veloWitch = 5
  calc[1] = 1
  calc[2] = 1
  NumResp = 2
  recorde = 0
}

function draw(){
  if(tela == 0){
    Tmenu()
  }
  if(tela == 1){
    Tjogo()
  }
  if(tela == 2){
    Tinstrucoes()
  }
  if(tela == 3){
    Tcreditos()
  }
  if(tela == 4){
    lose()
  }
  
}

function mouseClicked(){
  if(tela == 0){

//Botão de jogar
    if(mouseX > xBMenu && mouseX < xBMenu + larguraB && mouseY > yB1Menu && mouseY < yB1Menu + alturaB){
      tela = 1
    }

//Botão de instruções
    if(mouseX > xBMenu && mouseX < xBMenu + larguraB && mouseY > yB2Menu && mouseY < yB2Menu + alturaB){
      tela = 2
    }

//Botão de creditos
    if(mouseX > xBMenu && mouseX < xBMenu + larguraB && mouseY > yB3Menu && mouseY < yB3Menu + alturaB){
      tela = 3
    }
  }
  
  
  if(tela == 1){
    
//Botão voltar
    voltarB()
}
  
  
  if(tela == 2){

//Botão de voltar
    voltarB()
  }
  
  
  if(tela == 3){

//Botão de voltar
    voltarB()
  }
  
    if(tela == 4){

//Botão de voltar
    voltarB()
  }
}

function voltarB(){
    if(mouseX > 11 && mouseX < 49 && mouseY > 11 && mouseY < 49){
      tela = 0
      pont = 0
      xresposta = random(500, 700)
      yresposta = random(15, 355)
      xobstaculo[1] = random(500, 700)
      yobstaculo[1] = random(15, 355)
      xobstaculo[2] = random(500, 700)
      yobstaculo[2] = random(15, 355)
      velocidade = 1
      veloWitch = 5
    }

}

function Tmenu(){
    
    background(220)
    image(imgFundo, 0, 0)

//Nome
    textFont(fontrael)
    textSize(50)
    fill(255)
    text("Math Witch", 106 , 120)
    
//Botão de Jogar
    fill(255, 203, 210)
    textSize(25)
    
    if(mouseX > xBMenu && mouseX < xBMenu + larguraB && mouseY > yB1Menu && mouseY < yB1Menu + alturaB){
      fill(250, 127, 156)
    }
    
    rect(xBMenu, yB1Menu, larguraB, alturaB, 10)
    fill(0)
    text("Jogar", 215, 245)

//Botão de instruções
    fill(255, 153, 255)
    textSize(25)
    
    if(mouseX > xBMenu && mouseX < xBMenu + larguraB && mouseY > yB2Menu && mouseY < yB2Menu + alturaB){
      fill(250, 127, 156)
    }
    rect(xBMenu, yB2Menu, larguraB, alturaB, 10)
    fill(0)
    text("Instruções", 185, 345)

//Botão de creditos
    fill(255, 119, 203)
    textSize(25)
    
    if(mouseX > xBMenu && mouseX < xBMenu + larguraB && mouseY > yB3Menu && mouseY < yB3Menu + alturaB){
      fill(250, 127, 156)
    }
    rect(xBMenu, yB3Menu, larguraB, alturaB, 10)
    fill(0)
    text("Créditos", 200, 445)

}

function Tjogo(){
    image(FundoJogo, 0, 0)
    FunJogo()

//Botão de voltar
    textSize(50)
    fill(255, 153, 255)
    
    if(mouseX > 11 && mouseX < 49 && mouseY > 11 && mouseY < 49){
      fill(250, 127, 156)
    }
    ellipse(30, 30, 40, 40)
    fill(0)
    text("<", 16, 47)

//Pontuação
    
    fill(0)
    textSize(20)
    text("Pontuação: "+pont, 350, 50)

//Soma
  
    fill(0)
    textSize(20)
    text("Soma: "+ Math.round(calc[1]) +"+"+ Math.round(calc[2]), 100,50)
  
  //Recorde
    fill(0)
    textSize(25)
    text("Recorde: "+ recorde, 190, 480)
    if(recorde < pont){
      recorde = pont
    }
  
    aumentoVelo()
    obstaculo()
    obstaculo1()
    resposta()
    colisao()
    animation()
    Witch()

}

function animation(){
    tempFly++
  
    image(fly[contFly%4], 100, Ywitch)
    if(tempFly > 7){
      contFly++
      tempFly = 0
    }
}

function FunJogo(){

    image(FundoJogo, pos, 0)
    image(FundoJogo, pos1, 0)
    
    pos = pos - 1
    pos1 = pos1 - 1
  
    if(pos<-500){
      pos = 0
    }
    if(pos1<0){
      pos1 = 500
    }
}

function Witch(){
    if(keyIsDown(UP_ARROW)){
      Ywitch = Ywitch - veloWitch
    }
    if(keyIsDown(DOWN_ARROW)){
      Ywitch = Ywitch + veloWitch
    }
    if(Ywitch < 0){
      Ywitch = 0
    }
    if(Ywitch > 370){
      Ywitch = 370
    }
}

function Tinstrucoes(){
  image(ImgInstrucoes, 0, 0)

//Botão de voltar
    textSize(50)
    fill(255, 153, 255)
    
    if(mouseX > 11 && mouseX < 49 && mouseY > 11 && mouseY < 49){
      fill(250, 127, 156)
    }
    ellipse(30, 30, 40, 40,)
    fill(0)
    text("<", 16, 47)
    
  
}

function Tcreditos(){
    image(ImgCreditos, 0, 0)
    
//Botão de voltar
    textSize(50)
    fill(255, 153, 255)
    
    if(mouseX > 11 && mouseX < 49 && mouseY > 11 && mouseY < 49){
      fill(250, 127, 156)
    }
    ellipse(30, 30, 40, 40,)
    fill(0)
    text("<", 16, 47)
    
}

function lose(){
  background(255, 79, 91)
  
//Botão de voltar
    textSize(50)
    fill(255, 153, 255)
    
    if(mouseX > 11 && mouseX < 49 && mouseY > 11 && mouseY < 49){
      fill(250, 127, 156)
    }
    ellipse(30, 30, 40, 40)
    fill(0)
    text("<", 16, 47)
  
//Aviso
    textSize(50)
    text("VOCÊ PERDEU!", 110, 52)
    
}

function obstaculo(){
    fill(255)
    ellipse(xobstaculo[1], yobstaculo[1], 30, 30)
    fill(0)
    textSize(20)
    text(Math.round(NumResp+1), xobstaculo[1]-8, yobstaculo[1]+8)

//sorteio da posção
    xobstaculo[1] = xobstaculo[1] - velocidade
    if(xobstaculo[1]<-15){
      xobstaculo[1] = random(500, 800)
      yobstaculo[1] = random(15, 355)
    }

}

function obstaculo1(){
    fill(255)
    ellipse(xobstaculo[2], yobstaculo[2], 30, 30)
    fill(0)
    textSize(20)
    text(Math.round(NumResp-1), xobstaculo[2]-8, yobstaculo[2]+8)
  
//sorteio da posção
      xobstaculo[2] = xobstaculo[2] - velocidade
    if(xobstaculo[2]<-15){
      xobstaculo[2] = random(500, 800)
      yobstaculo[2] = random(15, 355)
    }
  
}

function resposta(){
    fill(255)
    ellipse(xresposta, yresposta, 30, 30)
    fill(0)
    textSize(20)
    text(Math.round(NumResp), xresposta-8, yresposta+8)
  
//sorteio da posição
      xresposta = xresposta - velocidade
    if(xresposta<-15){
      xresposta = random(500, 800)
      yresposta = random(15, 355)
    }
  
}

function colisao(){

//colisão com obstaculo
  if(dist(121,Ywitch+26,xobstaculo[1],yobstaculo[1]) < 35){
    tela = 4
     }
//colisão com obstaculo 1
  if(dist(121,Ywitch+26,xobstaculo[2],yobstaculo[2]) < 35){
    tela =4
     }
//colisão com a resposta
  if(dist(121,Ywitch+26,xresposta,yresposta) < 35){
    pont = pont + 1
    xresposta = random(500, 800)
    yresposta = random(15, 355)
    xobstaculo[1] = random(500, 800)
    yobstaculo[1] = random(15, 355)
    xobstaculo[2] = random(500, 800)
    yobstaculo[2] = random(15, 355)
    calculos()
     }
}

function aumentoVelo(){
    if(pont >= 3 && pont <10){
      velocidade = 3
    }
    
    if(pont >= 10 && pont < 25){
      velocidade = 5
      veloWitch = 6
    }
  
    if(pont >= 25 && pont < 40){
      velocidade = 8
      veloWitch = 9
    }
    
    if(pont >= 40){
      velocidade = 10
      veloWitch = 10
    }
  
}

function calculos(){
  calc[1] = random(0,9)
  calc[2] = random(0,9)
  
  NumResp = Math.round(calc[1]) + Math.round(calc[2])
}