var kraje = []
var body = document.getElementById("body")

async function getData() {
    var data = await fetch("https://restcountries.com/v2/all")
    kraje = await data.json()
    console.log(kraje)

    losujKraj()
}
getData()

function losujNumer() {
    var max = kraje.length - 1
    return Math.floor(Math.random() * max)
}


var numer = 0
var population
var stolica = ""


function losujKraj() {


    numer = losujNumer()
    document.getElementById("d1").innerHTML = ""
    document.getElementById('h1-1').innerHTML = 'odpowiedź'

    // tworzenie elementów
    var div = document.createElement("div")
    div.setAttribute("id", "d0")
    
    var div01 = document.createElement("div")
    div01.setAttribute("id", "d01")

    var div02 = document.createElement("div")
    div02.setAttribute("id", "d02")

    var h1 = document.createElement("h1")

    var inp01 = document.createElement("input")
    inp01.setAttribute("id", "inp1")
    inp01.setAttribute("onchange", "sprStolice()")
    inp01.style.height = "21.047px"
    
    
    // flaga
    var flag = document.createElement("img")
    flag.setAttribute("src", kraje[numer].flag)
    flag.style.width = "300px"

    population = kraje[numer].population
    console.log(population)

    // nazwa
    h1.innerHTML = kraje[numer].name

    // appendChild
    div01.appendChild(flag)
    div01.appendChild(h1)
    div.appendChild(div01)
    div.appendChild(div02)
    document.getElementById("d1").appendChild(div)
    div02.appendChild(inp01)

    stolica = kraje[numer].capital
}

var pkt = 0
var err = 0

async function sprStolice() {
    numer = numer
    population=population
    var inp1 = document.getElementById("inp1")
    var userCap = inp1.value

       if(err<3){
        if (stolica == userCap){
           
            document.getElementById("d0").style.backgroundColor = "green"
            pkt++;
            document.getElementById("pkt").innerHTML = "punkty: " + pkt
            setTimeout(function(){
            losujKraj()
        }, 3000)
            
        
          }else{
           
            err++;
            document.getElementById("err").innerHTML = "błędy: " + err
            document.getElementById("d0").style.backgroundColor = "red"

            if(err<3){
            setTimeout(function(){
            
            losujKraj()
        }, 1000)
            }else{
                setTimeout(() => {
                    
                
            document.getElementById("d1").innerHTML = ""
            var h1 = document.createElement("h1");
            h1.innerHTML = "Koniec gry. Przegrałeś z wynikiem " + pkt + " punktów, popełniając " + err + " błędy/ów"
            document.getElementById("d1").appendChild(h1)
            }, 1000);
        }

          }
    }
}


function answer(){
    document.getElementById('h1-1').innerHTML = `odpowiedź: ${stolica}` 
}