<style scoped>
	.welcome-left__section {
		padding: 0 80px 0 100px ;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40%;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0.041);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		 
	}
	.welcome-left__section h1 {
		font-size: 50px;
		line-height: 60px;
		letter-spacing: 1.5px;
		color: #fff;
		margin-bottom: 20px;
	}
	.welcome-left__section p {
		font-size: 14px;
		color: #8b8b8b;

		line-height: 22px;
		margin-bottom: 30px;
	}
	.welcome-left__section button {
		padding: 10px 20px;
		/* font-weight: 700; */
		font-weight: 500;
		border: none;
		border-radius: 20px;
	}
	.welcome-right__section {
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
	.welcome-right__amount p{
		text-align: center;
		color: #8b8b8b;

	}
	.welcome-right__amount {
		margin-top: 40px;
	}
	.welcome-right__amount p:first-child {
		font-size: 40px;
		margin-bottom: 10px;
		font-weight: 700;
		background: linear-gradient(108deg, #ff00dd 0%, rgb(0, 194, 253) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.welcome-right__amount p:last-child {
		font-size: 13px;
		line-height: 20px;
		font-weight: 500;
		margin: 0 20px;
	}  
	.welcome__title-sec {
		background: linear-gradient(132deg, #ffc800 0%, rgb(255, 0, 204) 100%) !important;
 
		background-clip: text !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
	}
	.welcome__title-th {
		background: linear-gradient(132deg, #0055ff 0%, rgb(255, 0, 0) 100%) !important;
 
		background-clip: text !important;
		-webkit-background-clip: text !important;
		-webkit-text-fill-color: transparent !important;
	}

	@media screen and (max-width: 1600px) {
		.welcome-right__section {
			width: 25%;
		}
	}

	@media screen and (max-width: 1500px) {
		.welcome-left__section {
			padding: 0 40px 0 50px ;

		}
	}
	@media screen and (max-width: 1250px) {
		.welcome-left__section h1 {
			font-size: 40px;
			line-height: 52px;
		}
		.welcome-left__section p {
			font-size: 12px;
		}
		.welcome-right__amount p:last-child {
			font-size: 12px;
			line-height: 18px;
			
		}
	}
	@media screen and (max-width: 1000px) {
		.welcome-right__section {
			left: 0;
			height: unset;
			/* flex: 1 0; */
			flex-direction: row;
			width: unset;
			padding-bottom: 60px;
			top: unset;
			bottom: 0;

		}
	}
	@media screen and (max-width: 880px) {
		
		.welcome-left__section {
			-webkit-backdrop-filter: blur(4px);
			backdrop-filter: blur(4px);
			width: 80%;
		}
		.welcome-right__section {
			flex-direction: column;
			/* height: unset; */
			/* background: none !important; */
			align-items: center;
			max-width: 80%;
			position: static;
			background-color: rgba(255, 255, 255, 0.041);
			-webkit-backdrop-filter: blur(4px);
			backdrop-filter: blur(4px);

		}
		.welcome-right__amount {
			max-width: 400px;
		}
	}

	@media screen and (max-width: 450px) {
		.welcome-left__section {
			padding-left: 30px;
		}
		.welcome-left__section h1 {
			font-size: 36px;
			line-height: 43px;
		}
		.welcome-right__amount p:last-child {
			font-size: 11px;
			/* line-height: 18px; */
			
		}
	}
	@media screen and (max-width: 370px) {
		.welcome-left__section h1 {
			font-size: 30px;
		 }
	}

</style>

<template>
	<section>
		<div class="welcome-left__section">
			<div>
				<h1>EDUCATIONAL <br/> SYSTEM </h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus cum non.Quisquam maxime corrupti? Eius praesentium quaerat temporibus ducimus esse.</p>
				<button>First Try</button>
			</div>
			
		</div>

		<div class="welcome-right__section">
			<div class="welcome-right__amount">
				<p>
					525
				</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, amet nesciunt molestiae harum autem magni, quisquam praesentium illum nemo</p>	
			</div>
			<div class="welcome-right__amount">
				<p class="welcome__title-sec">
					242
				</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit quisquam praesentium illum nemo</p>	
			</div>
			<div class="welcome-right__amount">
				<p class="welcome__title-th">
					376
				</p>
				<p>123s  ipsum dolor, sit amet consectetur adipisicing elit. m autem magni, quisquam praesentium illum nemo</p>	
			</div>
		</div>
	 
	</section>


</template>


<script>


</script>