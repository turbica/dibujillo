		<!-- Muestra una lista con los viajes disponibles segun los campos requeridos por el usuario -->
<%@page import="java.util.*"%>
<%@page import="es.unizar.sisinf.data.vo.MensajeVO"%>
<%@page language="java" contentType="text/html; charset=UTF-8"
 	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	<!DOCTYPE html>
	<html lang="zxx" class="no-js">
	<head>
		<!-- Mobile Specific Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- Favicon-->
		<link rel="shortcut icon" href="img/fav.png">
		<!-- Author Meta -->
		<meta name="author" content="colorlib">
		<!-- Meta Description -->
		<meta name="description" content="">
		<!-- Meta Keyword -->
		<meta name="keywords" content="">
		<!-- meta character set -->
		<meta charset="UTF-8">
		<!-- Site Title -->
		<title>Travel</title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"> 
			<!--
			CSS
			============================================= -->
			<link rel="stylesheet" href="css/linearicons.css">
			<link rel="stylesheet" href="css/font-awesome.min.css">
			<link rel="stylesheet" href="css/bootstrap.css">
			<link rel="stylesheet" href="css/magnific-popup.css">
			<link rel="stylesheet" href="css/jquery-ui.css">				
			<link rel="stylesheet" href="css/nice-select.css">							
			<link rel="stylesheet" href="css/animate.min.css">
			<link rel="stylesheet" href="css/owl.carousel.css">				
			<link rel="stylesheet" href="css/main.css">
			<link rel="stylesheet" href="css/containers.css">
		</head>
		<body>	
				<header id="header">
						<div class="header-top">
							<div class="container">
							  <div class="row align-items-center">
								  <div class="col-lg-12 col-sm-12 col-12 header-top-right">
								  </div>
							  </div>			  					
							</div>
						</div>
						<div class="container main-menu">
							<div class="row align-items-center justify-content-between d-flex">
							  <div id="logo">
								<a href="inicio.html"><img src="img/logo.png" alt="" title="" width="110px" height="55px" /></a>
							  </div>
							  <nav id="nav-menu-container">
								<ul class="nav-menu">
								  <li><a href="inicio.html">PÃ¡gina principal</a></li>
								  <li><a href="packages.html">Mis viajes</a></li>
								  <li><a href="ServletMostrarUsuario">Perfil</a></li>
								  <li><a href="ServletUsuariosConConversaciones">Mensajes</a></li>	
								  <li><a href="publicarViaje.html">Nuevo Viaje</a></li>
								</ul>
							  </nav>					      		  
							</div>
						</div> 
					</header>
			  
			<!-- start banner Area -->
			<section class="about-banner relative">
				<div class="overlay overlay-bg"></div>
				<div class="container">				
					<div class="row d-flex align-items-center justify-content-center">
						<div class="about-content col-lg-12">
							<h1 class="text-white">
								Mensajes			
							</h1>	
							<p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="insurance.html"> Mensajes</a></p>
						</div>	
					</div>
				</div>
			</section>
			<!-- End banner Area -->	

			<!-- Start insurence-one Area -->
			<section class="insurence-one-area section-gap">
				<h3 class="text-uppercase" style="text-align:center"> <%=request.getAttribute("UserB")%>userB </h3>
				</br>
				<% List<MensajeVO> listaR = (List<MensajeVO>) request.getAttribute("MensajesRemitente");
				   List<MensajeVO> listaD = (List<MensajeVO>) request.getAttribute("MensajesDestinatario");
				   if(listaR.size()==0 && listaD.size()==0){ %>
				   		<div>
				   			Aun no tiene mensajes con <%=request.getAttribute("UserB")%> 
				   		</div>
				  <%}else{%>
					<div class="container">
					<%while (listaR.size()>0 || listaD.size()>0){
						MensajeVO mensR = listaR.get(0);
						MensajeVO mensD = listaD.get(0);
						if(mensR.getHora()<mensR.getHora()){ %>
							<div class="container-m">
								<p><%=mensR.getTexto()%><span class="time-right"><%=mensR.getHora()%><span></p>
							</div>
						<% listaR.remove(0); 
							mensR = listaR.get(0);
						} 
						else{
							%>
							<div class="container-m darker">
								<p><%=mensD.getTexto()%><span class="time-right"><%=mensD.getHora()%></span></p>
							</div>
					 	<%  listaD.remove(0);
						mensD = listaD.get(0);
						}
					  }
			  		}%>
					</div>
				<script>
					var today = new Date();
					var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
					var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
				</script>

				<div class="row d-flex align-items-center justify-content-center">
					<form name="mensaje" action="ServletEnviarMensaje" method="get">
						<input type="text" name="texto" class="container-t" size="150" placeholder="...">	
						<input type="hidden" name="hora" id="hora" value="" />
						<script>document.getElementById('hora').value = time;</script>
						<input type="hidden" name="fecha" id="fecha" value="" />
						<script>document.getElementById('fecha').value = date;</script>
						<!-- OJO IGUAL EL USERB NO VA -->
						<input type="submit" class="container-e" value="Enviar">
					</form>
				</div>
			</section>
			<!-- End insurence-one Area -->

						<!-- start footer Area -->		
						<footer class="footer-area section-gap">
								<div class="container">
									<div class="row">
										<div class="single-footer-widget">
											<h6>Recuerda</h6>
											<p>
												Los niÃÂ±os sueÃÂ±an con su futuro. Comparte coche contribuyendo a la no contaminaciÃÂ³n y no se lo arrebates. 
											</p>
											<h6>Contacto</h6>
											<p>
												Si desea contactar con nosotros, <a href="./enviarEmail.html" target="_blank"> haga click aqui</a>
											</p>
										</div>
									</div>
									<div class="row footer-bottom d-flex justify-content-between align-items-center">
										<p class="col-lg-8 col-sm-12 footer-text m-0"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
				Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
				<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
									</div>
								</div>
							</footer>
							<!-- End footer Area -->

			<script src="js/vendor/jquery-2.2.4.min.js"></script>
			<script src="js/popper.min.js"></script>
			<script src="js/vendor/bootstrap.min.js"></script>			
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>		
 			<script src="js/jquery-ui.js"></script>					
  			<script src="js/easing.min.js"></script>			
			<script src="js/hoverIntent.js"></script>
			<script src="js/superfish.min.js"></script>	
			<script src="js/jquery.ajaxchimp.min.js"></script>
			<script src="js/jquery.magnific-popup.min.js"></script>						
			<script src="js/jquery.nice-select.min.js"></script>					
			<script src="js/owl.carousel.min.js"></script>							
			<script src="js/mail-script.js"></script>	
			<script src="js/main.js"></script>	
		</body>
	</html>