<script setup lang="ts">


</script>

<template> 
	<main>
		<Header/>
		<WebGL />
		<Welcome/> 
		<Description />
		<Products />
		<Goal />
		<Employees />
		<Footer />
	</main>
 
</template>


<style  >
	@font-face {
		font-weight: 400;
		font-family: Roboto;
		src: url("../assets/font/Roboto-Regular.ttf");
	}
	@font-face {
		font-weight: 500;
		font-family: Roboto;
		src: url("../assets/font/Roboto-Medium.ttf");
	}
	@font-face {
		font-weight: 600;
		font-family: Roboto;
		src: url("../assets/font/Roboto-Bold.ttf");
	}
	@font-face {
		font-weight: 800;
		font-family: Roboto;
		src: url("../assets/font/Roboto-Black.ttf");
	}
	@font-face {
		font-weight: 300;
		font-family: Roboto;
		src: url("../assets/font/Roboto-Light.ttf");
	}

	body {
		overscroll-behavior: none;
		background-color: black;
	}
	body::-webkit-scrollbar {
	
	  width: 6px;
	}

	body::-webkit-scrollbar-track {
		 background-color: #000000;   
	}

	body::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255, 0.081);    /* color of the scroll thumb */
		border-radius: 20px;       /* roundness of the scroll thumb */

	}
	* {
		font-family: Roboto;
		color: #484747;
		box-sizing: border-box;
		-ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
		margin: 0;
		padding: 0;
	}
	 
	canvas {
		display: block;
	}


</style>