 
  /*
  function fmas() {
        array[i].cantidad++;
  }
  document.getElementById(_mas)
    mas.onclick=fmas;*/
  //addbottones(productos, '#formato');
  /*console.log(i);
      console.log(array[i]);
      console.log(array[i].cantidad);
      console.log(array[i].valor);*/
  //body = document.body;
  //format.appendChild(button);
  //formato.style.background = ;

 //window.onload = actdesglose();
/*
function actdesglose() {
    /*
    let total=0,numeros = [1, 2, 3, 4, 5];
    for(let i = 0; i <= totales_productos-3; i++) total+=numeros[i];
    console.log(total);
    */
    //let siniva = totales_productos.reduce((a, b) => a + b, 0);
    let siniva = 0;
    for (let i = 0; i <= totales_productos.length - 4; i++) {
      siniva += totales_productos[i];
      //console.log(i);
      //console.log(totales_productos[i]);
    }
    siniva = +((siniva).toFixed(2));
    let iva = +((siniva * ivaEcuador).toFixed(2));
    let coniva = +((siniva + iva).toFixed(2));
    let l = totales_productos.length - 3;
/*
    console.log(siniva);
    siniva= siniva.toFixed(2);
    siniva=+(siniva);
    console.log(siniva);
    
    
    console.log(iva);
    iva= iva.toFixed(2);
    iva=+(iva);
    console.log(iva);
*/
    /*
    console.log(coniva);
    coniva= coniva.toFixed(2);
    coniva =+(coniva);
    console.log(coniva);
    */
    /*
    console.log(totales_productos);
    console.log(':sin:');
    console.log(l);
    */
    //console.log(document.getElementById('Totales'+l).innerHTML);
    document.getElementById('Totales' + l).innerHTML = siniva;
    totales_productos.splice(l, 1);
    totales_productos.splice(l, 0, (siniva));
    l++;
    /*
    console.log(':iva:');
    console.log(l);
    */
    document.getElementById('Totales' + l).innerHTML = iva;
    totales_productos.splice(l, 1);
    totales_productos.splice(l, 0, (iva));
    l++;
    /*
    console.log(':con:');
    console.log(l);
    */
    document.getElementById('Totales' + l).innerHTML = coniva;
    totales_productos.splice(l, 1);
    totales_productos.splice(l, 0, (coniva));
    l++;
    //console.log(totales_productos);


    //document.getElementById('h3iva').innerHTML = iva;
    //document.getElementById('h3coniva').innerHTML = coniva;


  }
  /*
    //totales_productos.splice(l, 1);
    totales_productos.splice(l, 1, (siniva));
    l++;
    document.getElementById('Totales' + l).innerHTML = iva;
    totales_productos.splice(l, 1);
    totales_productos.splice(l, 0, (iva));
    l++;
    document.getElementById('Totales' + l).innerHTML = coniva;
    totales_productos.splice(l, 1);
    totales_productos.splice(l, 0, (coniva));
    l++;
    */
*/
/*
  let format = document.querySelector('#formato');
  let div1 = document.createElement("div");
  let button = document.createElement("button");
  //div1.appendChild(button);
  //format.appendChild(div1);
  function crearElemento(elemento, identificador, clase, texto, ruta, valor) {
    item = document.createElement(elemento);
    if (identificador !=='__'){ item.id = identificador; }
    if (clase !=='__') { item.className = clase; }
    if (texto !=='__') { item.innerText = texto; }
    if (ruta !== '__') { item.dataset.cargarVista = ruta; }
    if (valor !== '__') { item.value = valor; }
    return item;
  }
  btn = crearElemento('button','__','__','+','__','__');
  format.appendChild(btn);
  */
  /*
  function desglose() {
    let divdes = document.getElementById('Totales_div');

    let h3siniva = document.createElement("h3");
    let h3iva = document.createElement("h3");
    let h3coniva = document.createElement("h3");

    h3siniva.id = 'h3siniva';
    h3iva.id = 'h3iva';
    h3coniva.id = 'h3coniva';


    let suma = 0;
    console.log(totales_productos.reduce((a, b) => a + b, 0));
    totales_productos.forEach(function (numero) {suma += numero;});

    //h3siniva.innerHTML = totales_productos.reduce((a, b) => a + b, 0);

    console.log(suma);

    h3siniva.innerHTML = suma;
    h3iva.innerHTML = h3siniva * ivaEcuador;
    h3coniva.innerHTML = h3siniva + h3iva;

    console.log(h3siniva.innerHTML);
    console.log(h3iva);
    console.log(h3coniva);

    divdes.appendChild(h3siniva);
    divdes.appendChild(h3iva);
    divdes.appendChild(h3coniva);

    //console.log(total);
    //
  }*/

 //totales_productos.splice(l, 3, (siniva),(iva),(coniva));
    /*document.getElementById('Totales' + l).innerHTML = siniva;
    l++;
    document.getElementById('Totales' + l).innerHTML = iva;    
    l++;
    document.getElementById('Totales' + l).innerHTML = coniva;
  */
 /*
    let l = totales_productos.length;
    
    totales_productos.splice(l + 1, 0, totales_productos.reduce((a, b) => a + b, 0));
    totales_productos.splice(l + 2, 0, ((totales_productos.reduce((a, b) => a + b, 0)) * ivaEcuador));
    totales_productos.splice(l + 3, 0, totales_productos.reduce((a, b) => a + b, 0) + (totales_productos.reduce((a, b) => a + b, 0) * ivaEcuador));
    */
 //console.log("hello word")
  /*
    document.getElementById("cantidad_licencias").innerHTML = 3;
  
    function add() {
      document.getElementById("cantidad_licencias").innerHTML++;
    }
    function substract() {
      if (document.getElementById("cantidad_licencias").innerHTML > 3)
        document.getElementById("cantidad_licencias").innerHTML--;
    }
    function valorpayphone(num1) {
      let resultado = num1 * 100;
      return resultado;
    }
    function pagar() {
      let d = new Date();
      var parametros = {
  
        amount: valorpayphone(costo_por_licencia),
        amountWithoutTax: valorpayphone(costo_por_licencia),
        clientTransactionID: "Prueba001",
        responseUrl: "https://desarrollotimospro.github.io/Pasarela-Payphone/",
        cansellacionUrl: "https://desarrollotimospro.github.io/Pasarela-Payphone/"
      };
      if (true) {
        console.log("hi");
        amount = valorpayphone(costo_por_licencia * document.getElementById("cantidad_licencias").innerHTML);
        amountWithoutTax = valorpayphone(costo_por_licencia * document.getElementById("cantidad_licencias").innerHTML);
        currency = "USD";
        clientTransactionId = d.valueOf();// + "0952754406";
      }
      //console.log(d.valueOf() + "0952754406");
  */
/*
  </div>
  <div>
  <section id="proforma">
    <div class="texto">
      <h1>Licencias</h1>
    </div>
    <div class="boton">
      <button onclick="add()">+</button>
      <button onclick="substract()">-</button>
    </div>
    <div class="texto">
      <h1 id="cantidad_licencias"></h1>
    </div>
    <div></div>
    <div>
      <div id="pp-button"></div>
    </div>
    <div class="boton">
      <button onclick="pagar()">Pagar</button>
    </div>
  </section>

  <section id="formato"></section>
  /*amount: amount,
    amountWithoutTax: amountWithoutTax,
    amountWithTax: amountWithTax,
    tax: tax,
    service: service,
    tip: tip,
    currency: currency,
    clientTransactionId: clientTransactionId,
    storeId: storeId,
    reference: reference,
    phoneNumber: phoneNumber,
    email: email,
    documentId: documentId,
    */



<!--/*Metodo Express Checkout */-->
    <!--/*##############################Codigo Necesario ##################################*/-->
	<script>
        var monto,clientTransaccion;
            monto = document.getElementById("num1").innerHTML;
            //clientTransaccion = document.getElementById("transaccion").innerHTML;
            clientTransaccion =Math.random() *100*Math.random()*100;//creo un id de transaccion random

		window.onload = function() {
		payphone.Button({

		//token obtenido desde la consola de developer
		token: token,

		//PARÁMETROS DE CONFIGURACIÓN
		btnHorizontal: true,
        btnCard: true,

		createOrder: function(actions){

		//Se ingresan los datos de la transaccion ej. monto
		return actions.prepare({
       // debe cumplir la siguiente regla Amount = amountWithoutTax + AmountWithTax + AmountWithTax + Tax + service + tip
		amount: monto*100,// monto total de venta en etero $1 es 1*100
		amountWithoutTax: monto*100, //monto total que no cobra iva
        amountWithTax:0,//monto total que cobra iva
        tax: 0,//monto del iva
        service: 0,//si cobra montos de servicio
        tip:0,//si cobra montos de propina
        //storeId:"", Si dispone de mas de una tienda y quiere diferenciar la tienda de venta
		currency: "USD",
		clientTransactionId: clientTransaccion, ////id unico debe cambiar para cada transaccion
        responseUrl: "http://localhost/ButtomBasic/confirm.html",//cambiar a su url
        cancellationUrl: "http://localhost/ButtomBasic/BotonPago.html"//cambiar a su url
		});

		},
		onComplete: function(model, actions){

		//Se confirma el pago realizado
		actions.confirm({
		id: model.id,
		clientTxId: model.clientTxId
		}).then(function(value){

		//EN ESTA SECCIÓN SE PROCESA LA RESPUESTA CON LOS DATOS DE RESPUESTA                                   

		  if (value.statusCode==3){
                alert('Orden# '+value.clientTransactionId+
                '\n Codigo de Autorización : '+value.authorizationCode+
                '\n Moneda :'+value.currency+
                '\n Monto Total : $'+(value.amount/100).toFixed(2)+
                '\n Referencia : '+value.reference+
                '\n Medio de Pago : '+value.cardBrand+
                '\n Id Transaccion :' + value.transactionId + 
                '\n Estado :' + value.transactionStatus 
                );
              location.reload();
            }else{
                alert('Orden# '+value.clientTransactionId+
                '\n Codigo de Autorización : '+value.authorizationCode+
                '\n Moneda :'+value.currency+
                '\n Monto Total : $'+(value.amount/100).toFixed(2)+
                '\n Referencia : '+value.reference+
                '\n Medio de Pago : '+value.cardBrand+
                '\n Id Transaccion : ' + value.transactionId + 
                '\n Estado : ' + value.transactionStatus +
                '\n Hubo un problema su transaccion fue : '+value.message
                );
              location.reload();
		  }
		}).catch(function(err){
            alert(err);
            location.reload();
		  console.log(err);
		});

		}
		}).render('#pp-button');

		}

        
	</script>	
	<div id="pp-button"></div>
        /*
    console.log(amount);
    console.log(amountWithTax);
    console.log(tax);
*/