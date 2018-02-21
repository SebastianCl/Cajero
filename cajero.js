class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad= c;
  }
}

function entregarDinero()
{
    var t = document.getElementById("txtdinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
      if (dinero%5 !=0)
      {
        r.innerHTML = "El monto especificado no es valido";
        return;
      }

      if (dinero > 0)
      {
        div = Math.floor(dinero/bi.valor);

        if (div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }

        entregado.push(new Billete(bi.valor,papeles));
        dinero -= bi.valor*papeles;
      }

    }

    if (dinero > 0)
    {
      r.innerHTML = "I dont have Money";
    }
    else
    {
        for (var e of entregado)
        {
          if (e.cantidad > 0)
          {
              r.innerHTML += e.cantidad + " Billetes de $" + e.valor + "<br/>";
          }

        }
    }

}

var caja = [];
var entregado = [];
caja.push(new Billete(100,10));
caja.push(new Billete(50,10));
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));
caja.push(new Billete(5,10));
var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado");
var b = document.getElementById("btnExtraer");
b.addEventListener("click",entregarDinero);
