<style scoped>
	.container {
		padding-top: 200px;
		max-width: 1500px;
		width: 100%;
		margin:  0 auto;
	}
 
	
	.products__title h3 {
		text-align: center;
		margin-bottom: 10px;
		font-size: 35px;
		color: #fff;
	}
	.products__title p {
		max-width: 600px;
		margin: 0 auto;;
		line-height: 24px;
		font-size: 14px;
		text-align: center;
		margin-bottom: 50px;
		color: #8b8b8b;

	}
	.product__item {
		margin-bottom: 150px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.product__item img {
		margin-right: 40px;
		width: 600px;
		border-radius:  150px 10px 150px 10px;
	}
	.product__item-title h6 {
		background: linear-gradient(132deg, #0055ff 0%, rgb(255, 0, 0) 100%) ;


		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 29px;
		color: #bab7b7;
		margin-bottom: 15px;
		text-align: center;
	}
	.product__item-title p {
		max-width: 700px;
		line-height: 22px;
		text-align: end;
		color: #8b8b8b;
		font-size: 14px;

	}
	.end p{
		text-align: start !important;
	}
	.end h6 {
		background: linear-gradient(108deg, #ff00dd 0%, rgb(0, 194, 253) 100%) !important;

		background-clip: text !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
	}
	.left img {
		border-radius:    10px 150px  10px 150px;

	}
	@media screen and (max-width: 1600px) {
		.container {
			padding: 200px 40px 0 40px;
		}
		.product__item img {
			/* margin-right: 40px; */
			width: 500px;
			/* border-radius:  150px 10px 150px 10px; */
		}
	}
	@media screen and (max-width: 1250px) { 
		.products__title h3 {
	 
			font-size: 30px;
			 
		}
		.product__item-title p {
			max-width: 500px;
			font-size: 13px;
		 
		}
		.products__title p {
			max-width: 500px;
		}
	}


	@media screen and (max-width: 1000px) {
		.products__title p {
			font-size: 12px;
		}
	}
	@media screen and (max-width: 880px) {
		.product__item {
			display: flex;
			flex-direction: column;
		}
		.product__item-title {
			margin-top: 40px;
			margin-bottom: 40px;
		}
	}
	@media screen and (max-width: 650px) { 
		.product__item p {
			font-size: 12px !important;
		}
		.product__item img {
			width: 100%;
			margin-right: 0;
		}

	}
	@media screen and (max-width: 450px) {
		.products__title h3 {
			font-size: 25px;
		 }
		 .products__title p {
			font-size: 11px;
			line-height: 20px;
		 }
		 .product__item h6 {
			font-size: 25px;

		 }

		 .product__item p {
			font-size: 11px;
			line-height: 20px;

		 }
	}

</style>

<template> 
	<section>
		<div class="container">
			<div class="products__title">
				<h3>Products</h3>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nemo quod minus soluta odit vel ab corporis exercitationem commodi, repellat, in id ex ratione accusamus similique maxime at, ipsam ducimus!</p>
			</div>
			
			<div class="product__item">
				<img src="https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-102867.jpg?w=1380&t=st=1690813202~exp=1690813802~hmac=c1cdabc93e8a12205fdce55410a1253e61053f6a5c4891da03901582b7476a50" alt="productItem">
				<div class="product__item-title">
					<h6>Some Title</h6>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto molestiae nihil, nam ab ut quas excepturi voluptatum assumenda voluptatem sapiente sint! Odit nesciunt consequuntur rem aspernatur quos, tempora architecto?</p>
			
				</div>
			</div>
			<div class="product__item left">
				 <div class="product__item-title end">
					<h6>Some Title</h6>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto molestiae nihil, nam ab ut quas excepturi voluptatum assumenda voluptatem sapiente sint! Odit nesciunt consequuntur rem aspernatur quos, tempora architecto?</p>
			
				</div>
				<img src="https://img.freepik.com/free-photo/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_1258-103545.jpg?w=1380&t=st=1690813997~exp=1690814597~hmac=abd80f4f03704cc2e110d7e3c0f5c1c4cbf3e3b22b68aa22cd1a18af5ce4e8a2" alt="productItem">
				
			</div>

		</div>


	</section>



</template>


<script>	



</script>