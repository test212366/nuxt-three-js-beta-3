<style scoped>

	.description-left__section {
		border-radius: 0 0 30px 0;
		padding: 0 80px 0 100px ;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40%;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0.041);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);	
		border-bottom: 1px solid #1d1d1d;
	}
	.description-left__section h1 {
		font-size: 50px;
		line-height: 60px;
		letter-spacing: 1.5px;
		color: #fff;
		margin-bottom: 20px;
	}
	.description-left__section p {
		font-size: 14px;
		color: #8b8b8b;
		line-height: 22px;
		margin-bottom: 30px;
	}
	.description-right__section {
		border-bottom: 1px solid #1d1d1d;
		border-radius: 0 0  0 30px;


		position: absolute;
		right: 0;
		top: 0;
		width: 20%;
		background: radial-gradient(80.33% 27.81% at 91.33% 61.44%, #5100ff15 40.26%, #00000044 100%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		padding: 20px;	 
		height: 100vh;
	}
	.description-right__amount p{
		text-align: center;
		color: #8b8b8b;

	}
	.description-right__amount {
		margin-top: 40px;
	}
	.description-right__amount p:first-child {
		font-size: 40px;
		margin-bottom: 10px;
		font-weight: 700;
		background: linear-gradient(108deg, #ff00dd 0%, rgb(0, 194, 253) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.description-right__amount p:last-child {
		font-size: 16px;
		/* text-decoration: te; */
		line-height: 20px;
		font-weight: 500;
		margin: 0 20px;
	}  
	.description__wrapper {
		position: relative;
	}
	
	@media screen and (max-width: 1600px) {
		.description-right__section {
			width: 25%;
		}
	}
	@media screen and (max-width: 1500px) {
		.description-left__section {
			padding: 0 40px 0 50px ;

		}
	}
	@media screen and (max-width: 1250px) {
		.description-left__section h1 {
			font-size: 40px;
			line-height: 52px;
		}
		.description-left__section p {
			font-size: 12px;
		}
		.description-right__amount p:last-child {
			font-size: 12px;
			line-height: 18px;
			
		}
	}

	@media screen and (max-width: 1000px) {
		.description-right__section {
			left: 0;
			height: 25vh;
			/* flex: 1 0; */
			flex-direction: row;
			width: unset;
			top: unset;
			bottom: 0;

		}
	}

	@media screen and (max-width: 880px) {
		
		.description-left__section {
			/* border-radius: none !important; */
			width: 80%;
			border-radius: 0 !important;
			-webkit-backdrop-filter: blur(4px);
			backdrop-filter: blur(4px);
		}
		.description-right__section {
			
			flex-direction: column;
			/* height: unset; */
			/* background: none !important; */
			align-items: center;
			max-width: 80%;
			position: static;
			background-color: rgba(255, 255, 255, 0.041);
			-webkit-backdrop-filter: blur(4px);
			backdrop-filter: blur(4px);
			height: unset;
			border-radius: 0 0 40px 0;
		}
		.description-right__amount {
			max-width: 400px;
		}
	}
	@media screen and (max-width: 450px) {
		.description-left__section {
			padding-left: 30px;
		}
		.description-left__section h1 {
			font-size: 36px;
			line-height: 43px;
		}
		.description-right__amount p:last-child {
			font-size: 11px;
			/* line-height: 18px; */
			
		}
	}
	@media screen and (max-width: 370px) {
		.description-left__section h1 {
			font-size: 30px;
		 }
	}

</style>


<template> 
	<section class="description__wrapper">
		<div class="description-left__section">
			<div>
				<h1>DESCRIPTON <br/> SYSTEM </h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil aperiam pariatur minus error? Fuga voluptate, velit, aliquam modi qui et ad magnam amet explicabo voluptatum doloribus neque ipsum impedit. Consequatur.
					 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus cum non.Quisquam maxime corrupti? Eius praesentium quaerat temporibus ducimus esse.</p>
 			</div>
			
		</div>
		<div class="description-right__section">
			<div class="description-right__amount">
				<p>
					5
				</p>
				<p>DIFFERENT WAYS OF LEARNING</p>	
			</div>
			<div class="description-right__amount">
				<p class="description-sec">
					12
				</p>
				<p>SCHOOLS AROUND YOUR SUCCESS AND SOMETHING ELSE</p>	
			</div>
			<div class="description-right__amount">
				<p class="description__title-th">
					8
				</p>
				<p>MY FUTURE MILIONS</p>	
			</div>
		</div>


	</section>

</template>


<script>


</script>