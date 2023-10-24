<style scoped>
	header {
		padding: 50px;
		display: flex;
		justify-content: space-between;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
	}
	header button {
		display: flex;
		align-items: center;
		border: none;
		background-color: transparent;
		color: #fff;

	}
	header button div {
		margin-left: 10px;
		height: 2px;
		width: 20px;
		background-color: #888888;
	}
	.container {
		max-width: 1700px;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
		margin: 0 auto;
	}
	header p {
		color: #fff;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 450px) {
		header {
			padding: 35px 30px 0 30px;
		}
	}
</style>


<template> 
	<header>	
		<div class="container">
			<p>SpecJas</p>
			<button>
				M <div>

				</div>
			</button>

		</div>
		 

	</header>

</template>


<script>


</script>