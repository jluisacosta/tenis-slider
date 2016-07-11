var seleccion = 1,marca = 1,limite;
var slides,lupa,supra, adidas, nike;
var producto, precio, descripcion;
var transicion = false;
var opacity_info = 0;

function inicializa_elementos(){
	slides = document.getElementById("slides");
	lupa = document.getElementById("lupa");
	supra = document.getElementById("supra");
	adidas = document.getElementById("adidas");
	nike = document.getElementById("nike");
	producto = document.getElementById("producto");
	precio = document.getElementById("precio");
	descripcion = document.getElementById("descripcion");
	carga_marca();
	actualiza_contexto();
}

function actualiza_contexto(){
	lupa.style.top = (document.getElementById("mini"+seleccion).offsetTop+16)+"px"
	slides.style.left = (-document.getElementById("img"+seleccion).offsetLeft)+"px";
	opacity_info = 0;
	carga_info();
}

function posiciona_lupa(num_img){
	if(!transicion){
		seleccion = num_img;
		actualiza_contexto();
	}
}

function adelante(){
	if(!transicion && seleccion<4){
		transicion = true;
		seleccion += 1;
		limite = -document.getElementById("img"+seleccion).offsetLeft;
		avanza();
	}
}

function avanza(){
	if(slides.offsetLeft>limite){
		slides.style.left = (slides.offsetLeft-1)+"px";
		setTimeout("avanza()",1);
	}
	else{
		actualiza_contexto();
		transicion = false;
	}
}

function atras(){
	if(!transicion && seleccion>1){
		pos_actual = document.getElementById("img"+seleccion).offsetLeft;
		transicion = true;
		seleccion -= 1;
		pos_final = document.getElementById("img"+seleccion).offsetLeft;
		limite = slides.offsetLeft + (pos_actual - pos_final);
		retrocede();
	}
}

function retrocede(){
	if(slides.offsetLeft<limite){
		slides.style.left = (slides.offsetLeft+1)+"px";
		setTimeout("retrocede()",1);
	}
	else{
		actualiza_contexto();
		transicion = false;
	}
}

function aparece(){
	if(opacity_info<1.0){
		opacity_info += .01;
		producto.style.opacity = opacity_info;
		precio.style.opacity = opacity_info;
		descripcion.style.opacity = opacity_info;
		setTimeout("aparece()",10);
	}
}

function carga_info(){
	var prod,pr,desc;
	switch(seleccion){
		case 1:
			prod = "Supra Skytop Lead Black";
			pr = "$1,799<sup>oo</sup>";
			desc = "Supra Skytop, plomo y negro.</br></br>"+
				   "Supra Skytop en cuero. 100% de algodón,"+
				   "plantilla AVOI, suela: Caucho vulcanizado "+
				   "suela de goma. De larga duración, junto con "+
				   "entresuela SupraFoams suministro de toda la "+
				   "oposición en el efecto de los pies.";
		break;
		case 2:
			prod = "Supra Skytop Black Red Gray";
			pr = "$2,099<sup>oo</sup>";
			desc = "Supra Skytop Negro Gris Rojo, pedido mucho "+
				   "por los jóvenes desde que fue lanzado por "+
				   "primera vez.</br>El diseño de moda, únicos en "+
				   "textura. Supra Skytop exclusivo para los hombres "+
				   "basado en cuero, 100% de algodón, plantilla AVOI "+
				   "Suela: Caucho vulcanizado suela de goma. De larga "+
				   "duración, junto con entresuela SupraFoams suministro "+
				   "de toda la oposición en el efecto de los pies.";
		break;
		case 3:
			prod = "Supra Skytop III";
			pr = "$2,299<sup>oo</sup>";
			desc = "Supra Skytop III son los nuevos estilos para "+
				   "todo tipo de zapatillas en el mundo.</br></br>"+
				   "Tiene buena resistencia al impacto, la protección "+
				   "adicional del talón, así como las suelas "+
				   "vulcanizadas que te harán sentir toda la "+
				   "comodidad cuando camines, con el logotipo de corona.";
		break;
		case 4:
			prod = "Supra Skytop Lead Black";
			pr = "$2,299<sup>oo</sup>";
			desc = "Supra Skytop oscuro blanqueado.</br></br>"+
				   "Diseños de tendencia y poco común. Supra "+
				   "Skytop exclusivo para homres basado en "+
				   "cuero, 100% de algodón, plantilla AVOI Suela: "+
				   "Caucho vulcanizado suela de goma. De larga "+
				   "duración, junto con entresuela SupraFoams "+
				   "suminsitro de toda la oposición en el efecto de los pies.";
		break;
	}

	producto.innerHTML = prod+"</br><strong>SUPRA</strong>";
	precio.innerHTML = "<strong>"+pr+"</strong>";
	descripcion.innerHTML = "<strong>Descripción</strong></br><span>"+desc+"</span>";
	aparece();
}

function carga_marca(){
	switch(marca){
		case 1:
			supra.style.opacity = 1;
			adidas.style.opacity = .5;
			nike.style.opacity = .5;
		break;
		case 2:
			supra.style.opacity = .5;
			adidas.style.opacity = 1;
			nike.style.opacity = .5;
		break;
		case 3:
			supra.style.opacity = .5;
			adidas.style.opacity = .5;
			nike.style.opacity = 1;
		break;
	}
}

function adelante_marca(){
	if(marca<3){
		marca += 1;
		carga_marca();
	}
}

function atras_marca(){
	if(marca>1){
		marca -= 1;
		carga_marca();
	}
}