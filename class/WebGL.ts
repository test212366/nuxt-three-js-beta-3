	
	import * as THREE from 'three'
	import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
	import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' 
	// import GUI from 'lil-gui'
	import gsap from 'gsap'
	//@ts-ignore
	import fragmentShader from '../shaders/fragment.frag';
 	//@ts-ignore
	import vertexShader from '../shaders/vertex.vert'


	//@ts-ignore
	import fragPlane from '../shaders/fragPlane.frag';
	//@ts-ignore
  	import vertexPlane from '../shaders/vertexPlane.vert'




	
	//@ts-ignore
	import fragDNA from '../shaders/fragmentDNA.frag';
	//@ts-ignore
  	import vertexDNA from '../shaders/vertexParticles.vert'


 
	//@ts-ignore
	import { MSDFTextGeometry, uniforms } from "three-msdf-text-utils";

	import atlasURL from '../3d-font/FontsFree-Net-SF-Pro-Rounded-Regular.png'
	import fnt from '../3d-font/FontsFree-Net-SF-Pro-Rounded-Regular-msdf.json'


	//@ts-ignore
	import dna from '../assets/dna.glb'

	
	// import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
	// import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
	// import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass'
	// import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass'
 

	const letters: any = 'qwertyuiopasdfghjklzxcvbnm'



 	export class WebGLScene {
		scene: any
		container: any
		width: any
		height: any
		renderer: any
		renderTarget: any
		camera: any
		controls: any
		time: number
		dracoLoader: any
		gltf: any
		isPlaying: boolean
		//@ts-ignore
		gui: GUI 
		imageAspect!: number
		material: any
		geometry: any
		ico: any
		  materialBGPlane: any
		  planeBG: any
		aspect: any
		materialText: any
		atlas: any
		materialDNA:any
		DNA: any


		constructor(options: any) {
			
			this.scene = new THREE.Scene()
			
			this.container = options.dom
			
			this.width = this.container.offsetWidth
			this.height = this.container.offsetHeight
			
			this.aspect = this.width / this.height
			// // for renderer { antialias: true }
			this.renderer = new THREE.WebGLRenderer({ antialias: true })
			this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
			this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
			this.renderer.setSize(this.width ,this.height )
			this.renderer.setClearColor(0xeeeeee, 1)
			this.renderer.useLegacyLights = true
			this.renderer.outputEncoding = THREE.sRGBEncoding
	

			
			this.renderer.setSize( window.innerWidth, window.innerHeight )

			this.container.appendChild(this.renderer.domElement)
	


			this.camera = new THREE.PerspectiveCamera( 70,
				this.width / this.height,
				0.01,
				10
			)
	
			this.camera.position.set(0, 0, 2) 
			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			this.time = 0


			this.dracoLoader = new DRACOLoader()
			this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
			this.gltf = new GLTFLoader()
			this.gltf.setDRACOLoader(this.dracoLoader)

			this.isPlaying = true



			this.gltf.load(dna, (gltf:any) => {
				const geometry = gltf.scene.children[0].geometry
				
				geometry.center()
				// geometry.scale.set(.9,.9,.9)
				this.createDNA(geometry)

			})

			this.addObjects()		 
			this.resize()
			this.render()
			this.setupResize()
			this.createText()
			this.eventScroll()
			this.responsive()
		}

		eventScroll() {
			let icoScale = .75
			if(this.width < 1600) icoScale = .6 
			if(this.width < 500) icoScale = .45 


			document.addEventListener('scroll', e => {
				const scrollY = window.scrollY / 690
				this.materialDNA.uniforms.progress.value = scrollY / 6
				this.materialText.uniforms.uProgress1.value = -scrollY / 1.5 + 1.8
				this.ico.position.x = scrollY / 2
				this.ico.rotation.x = -scrollY / 2
				this.ico.scale.set(-scrollY / 4 + icoScale, -scrollY / 4 + icoScale, -scrollY / 4 + icoScale )


			})
		}



		createDNA(geometry: any) {
			this.materialDNA = new THREE.ShaderMaterial({
				extensions: {
					derivatives: '#extension GL_OES_standard_derivatives : enable'
				},
				side: THREE.DoubleSide,
				uniforms: {
					time: {value: 0},
					uColor1: {value: new THREE.Color(0x4E1560)},
					uColor2: {value: new THREE.Color(0x4614B0)},
					uColor3: {value: new THREE.Color(0x4E2385)},
					resolution: {value: new THREE.Vector4()},
					progress: {value: 0}
				},
				vertexShader:vertexDNA,
				fragmentShader:fragDNA,
				transparent: true,
				depthTest:false,
				depthWrite: false,
				blending: THREE.AdditiveBlending
			})
			
 
			let number  = 180000
	
 
	
			let positions = new Float32Array(number )
			let randoms = new Float32Array(number / 3)
	
			let colorRandoms = new Float32Array(number / 3)
			let animationOffset = new Float32Array(number / 3)
	
 
			for (let i = 0; i < number / 3; i++) {
				randoms.set([Math.random()], i)
				colorRandoms.set([Math.random()], i)

				let theta = 0.002 * Math.PI * 2 * (Math.floor(i / 100))
				let radius = 0.03 * ((i % 100) - 50)	
				animationOffset.set([(i % 100) / 100], i)
				animationOffset.set([
					Math.floor(i /100) /600
				], i)

				let x = radius * Math.cos(theta)
				let z = radius * Math.sin(theta)
				let y = 0.01 * (Math.floor(i / 100)) - 2
	
	
	
				positions.set([x,y,z], i * 3)
			}
	
			// this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
			geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms, 1))
			geometry.setAttribute('offset', new THREE.BufferAttribute(animationOffset, 1))
			geometry.setAttribute('colorRandoms', new THREE.BufferAttribute(colorRandoms, 1))
	
	
	
			// this.geometry = new THREE.PlaneGeometry(1,1,10,10)
			this.DNA = new THREE.Points(geometry, this.materialDNA)
			this.DNA.scale.set(.8,.8,.8)
			if(this.width < 1000) this.DNA.scale.set(.4,.4,.4)
			this.DNA.position.y = .5
			this.scene.add(this.DNA)
		}



		settings() {
			let that = this
		 
			this.settings = {
					//@ts-ignore
				progress: 0
			}
			//@ts-ignore
			this.gui = new GUI()
			this.gui.add(this.settings, 'progress', 0, 1, 0.01)
		}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize(this.width, this.height)
	 
		this.camera.aspect = this.width / this.height


		this.imageAspect = 853/1280
		let a1, a2
		if(this.height / this.width > this.imageAspect) {
			a1 = (this.width / this.height) * this.imageAspect
			a2 = 1
		} else {
			a1 = 1
			a2 = (this.height / this.width) / this.imageAspect
		} 


		this.material.uniforms.resolution.value.x = this.width
		this.material.uniforms.resolution.value.y = this.height
		this.material.uniforms.resolution.value.z = a1
		this.material.uniforms.resolution.value.w = a2

		this.camera.updateProjectionMatrix()



	}


	addObjects() {
 

		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				uColor: {value: new THREE.Color(0x5400BE)},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader,
			fragmentShader
		})


		this.materialBGPlane = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader: vertexPlane,
			fragmentShader: fragPlane
		})
	 
		
		const bgGeometry = new THREE.PlaneGeometry(5 * this.aspect ,5)
		const geometryIco = new THREE.IcosahedronGeometry(1, 100)

		this.ico = new THREE.Mesh(geometryIco, this.material)
		this.planeBG = new THREE.Mesh(bgGeometry, this.materialBGPlane)
		this.planeBG.position.z = -1


		this.ico.scale.set(.75, .75, .75)
		
 


		this.scene.add(this.ico)
		this.scene.add(this.planeBG)
 
	}
	responsive() {
		if(this.width < 1600) {
			this.ico.scale.set(.6, .6, .6)
		}  
		if(this.width < 500) {
			this.ico.scale.set(.45 , .45 ,.45 )

		}
	}

 

	createText() {
		Promise.all([
			loadFontAtlas(atlasURL),
		 
	  ]).then(([atlas, font]:any) => {
			this.atlas = atlas
			let h = .4
			if(this.width < 1600) h = 0
			if(this.width < 1370) h = -.2
			if(this.width < 450) h = -.35


			for (let i = 0; i < 13; i++) {
				h += .12
				createLine(h)
			}
		 
		
 
	
	  })
	  const that = this
	  function createLine(x: number) {
			let textTarget:string = ''
			for (let i = 0; i < 50; i++) {
				const random = Math.ceil((Math.random() * 25) )   
			
				textTarget += `   ${letters[random]}`
				
			}

			const text = createText(textTarget, 0.0015, 37, x, -2.1, -.94)
			text.rotation.z = 1.58

			that.scene.add(text)
	  }

 
	  function createText (text: string, size: number, lineHeight:number, x: number, y: number, z: number) {
			if(!that.materialText) {
				that.materialText = new THREE.ShaderMaterial({
					side: THREE.DoubleSide,
					transparent: true,
					defines: {
						IS_SMALL: false,
					},
					extensions: {
						derivatives: true,
					},
					uniforms: {
						// Common
						...uniforms.common,
						
						// Rendering
						...uniforms.rendering,
						
						// Strokes
						...uniforms.strokes,
						...{
							uStrokeColor: {value: new THREE.Color(0x00ff00)},
							uProgress1: {value: 1.8},
							time: {value: 0},
							
						}
					},
					vertexShader: `
						// Attribute
						attribute vec2 layoutUv;
			
						attribute float lineIndex;
			
						attribute float lineLettersTotal;
						attribute float lineLetterIndex;
			
						attribute float lineWordsTotal;
						attribute float lineWordIndex;
			
						attribute float wordIndex;
			
						attribute float letterIndex;
			
						// Varyings
						varying vec2 vUv;
						varying vec2 vLayoutUv;
						varying vec3 vViewPosition;
						varying vec3 vNormal;
			
						varying float vLineIndex;
			
						varying float vLineLettersTotal;
						varying float vLineLetterIndex;
			
						varying float vLineWordsTotal;
						varying float vLineWordIndex;
			
						varying float vWordIndex;
			
						varying float vLetterIndex;
			
						void main() {
							// Output
							vec4 mvPosition = vec4(position, 1.0);
							mvPosition = modelViewMatrix * mvPosition;
							gl_Position = projectionMatrix * mvPosition;
			
							// Varyings
							vUv = uv;
							vLayoutUv = layoutUv;
							vViewPosition = -mvPosition.xyz;
							vNormal = normal;
			
							vLineIndex = lineIndex;
			
							vLineLettersTotal = lineLettersTotal;
							vLineLetterIndex = lineLetterIndex;
			
							vLineWordsTotal = lineWordsTotal;
							vLineWordIndex = lineWordIndex;
			
							vWordIndex = wordIndex;
			
							vLetterIndex = letterIndex;
						}
					`,
					fragmentShader: `
						// Varyings
						varying vec2 vUv;
						varying vec2 vLayoutUv;
						// Uniforms: Common
						uniform float uProgress1;
						uniform float uProgress2;
						uniform float uProgress3;
						uniform float uProgress4;
		
						uniform float time;
						uniform float uOpacity;
						uniform float uThreshold;
						uniform float uAlphaTest;
						uniform vec3 uColor;
						uniform sampler2D uMap;
			
						// Uniforms: Strokes
						uniform vec3 uStrokeColor;
						uniform float uStrokeOutsetWidth;
						uniform float uStrokeInsetWidth;
			
						// Utils: Median
						float median(float r, float g, float b) {
							return max(min(r, g), min(max(r, g), b));
						}
		
						
						float rand(vec2 n) { 
							return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
						}
		
		
						float rand(float n){return fract(sin(n) * 43758.5453123);}
		
						float noise(float p){
							float fl = floor(p);
						float fc = fract(p);
							return mix(rand(fl), rand(fl + 1.0), fc);
						}
							
						float noise(vec2 n) {
							const vec2 d = vec2(0.0, 1.0);
						vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
							return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
						}
						float map(float value, float min1, float max1, float min2, float max2) {
						return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
						}
		
			
						void main() {
							// Common
							// Texture sample
							vec3 s = texture2D(uMap, vUv).rgb;
			
							// Signed distance
							float sigDist = median(s.r, s.g, s.b) - 0.5;
			
							float afwidth = 1.4142135623730951 / 2.0;
			
							#ifdef IS_SMALL
									float alpha = smoothstep(uThreshold - afwidth, uThreshold + afwidth, sigDist);
							#else
									float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
							#endif
			
							// Strokes
							// Outset
							float sigDistOutset = sigDist + uStrokeOutsetWidth * 0.5;
			
							// Inset
							float sigDistInset = sigDist - uStrokeInsetWidth * 0.5;
			
							#ifdef IS_SMALL
									float outset = smoothstep(uThreshold - afwidth, uThreshold + afwidth, sigDistOutset);
									float inset = 1.0 - smoothstep(uThreshold - afwidth, uThreshold + afwidth, sigDistInset);
							#else
									float outset = clamp(sigDistOutset / fwidth(sigDistOutset) + 0.5, 0.0, 1.0);
									float inset = 1.0 - clamp(sigDistInset / fwidth(sigDistInset) + 0.5, 0.0, 1.0);
							#endif
			
							// Border
							float border = outset * inset;
			
							// Alpha Test
							if (alpha < uAlphaTest) discard;
			
							// Some animation
							//alpha *= sin(uTime);
			
							// Output: Common
			
							vec4 filledFragColor = vec4(uColor, uOpacity * alpha);
						
							//i might use border for border text => vec4 l1 = vec4(0., 0., 0., border);
		
							vec3 pink = vec3(.1, 0.22, .4);
						
							vec4 l1 = vec4(.5, .3, .9, border );
							vec4 l2 = vec4(pink, border);
							vec4 l3 = vec4(pink, outset);
							vec4 l4 = vec4(vec3(.2, .2, .2), outset);
		
		
							float x = floor(vLayoutUv.x * 10. * 3.8);
							float y = floor(vLayoutUv.y * 10.);
		
							float pattern = noise(vec2(x,y));
		
							float w = 1.;
							
		
							float p1 = uProgress1;
							p1 = map(p1, 0., 1., -w, 1.);
							p1 = smoothstep(p1, p1 + w, vLayoutUv.x);
						
							float mix1 =2. * p1 -pattern;
		
							mix1 = clamp(mix1, 0., 1.);
		
		
		
		
		
							float p2 = uProgress1 - 0.4 ;
							p2 = map(p2, 0., 1., -w, 1.);
							p2 = smoothstep(p2, p2 + w, vLayoutUv.x);
						
							float mix2 =2. * p2 -pattern;
		
							mix2 = clamp(mix2, 0., 1.);
		
		
		
							float p3 = uProgress1 - 0.6;
							p3 = map(p3, 0., 1., -w, 1.);
							p3 = smoothstep(p3, p3 + w, vLayoutUv.x);
						
							float mix3 =2. * p3 -pattern;
		
							mix3 = clamp(mix3, 0., 1.);
		
		
		
		
							float p4 = uProgress1 - .8;
							p4 = map(p4, 0., 1., -w, 1.);
							p4 = smoothstep(p4, p4 + w, vLayoutUv.x);
						
							float mix4 =2. * p4 -pattern;
		
							mix4 = clamp(mix4, 0., 1.);
		
		
		
							vec4 layer0 = mix(vec4(0.), l1, 1. - mix1);
							vec4 layer1 = mix(layer0, l2, 1. - mix2);
							vec4 layer2 = mix(layer1, l3, 1. - mix3);
							vec4 layer3 = mix(layer2, l4, 1. - mix4);
		
					
		
							//   gl_FragColor = filledFragColor;
							//   gl_FragColor = vec4(uProgress1 * 1.0, 0., 0., 1.0);
							//   gl_FragColor = l1;
							//   gl_FragColor = vec4(vec3(pattern), 1.);
							//   /gl_FragColor = vec4(vec3(p0_), 1.);
							gl_FragColor = layer3;
		
							// gl_FragColor = vec4(vLayoutUv, 0., 1.);
					
		
						}
					`,
				});
		
				that.materialText.uniforms.uMap.value = that.atlas;
			}

			const geometry = that.createTextGeometry(text, lineHeight)	
			let textTarget = new THREE.Mesh(geometry, that.materialText);
			textTarget.scale.set(size,-size,size)
			textTarget.position.x = x
			textTarget.position.y = y
			textTarget.position.z = z

	 
			return textTarget
		}
	
	
	
			function loadFontAtlas(path:any) {
					const promise = new Promise((resolve, reject) => {
						const loader = new THREE.TextureLoader();
						loader.load(path, resolve);
					});
			
					return promise;
			}
	}
	createTextGeometry(text: string, lineHeight: number, centerText?: boolean) {
		const geometry = new MSDFTextGeometry({
			text: text.toUpperCase(),
			font: fnt,
			lineHeight
		})
		geometry.computeBoundingBox()

		return geometry
	}
	addLights() {
		const light1 = new THREE.AmbientLight(0xeeeeee, 0.5)
		this.scene.add(light1)
	
	
		const light2 = new THREE.DirectionalLight(0xeeeeee, 0.5)
		light2.position.set(0.5,0,0.866)
		this.scene.add(light2)
	}

	stop() {
		this.isPlaying = false
	}

	play() {
		if(!this.isPlaying) {
			this.isPlaying = true
			this.render()
		}
	}

	render() {
			if(this.DNA) this.DNA.rotation.y = this.time / 100

			this.time += 0.05

			if(this.width < 1000) {
				this.material.uniforms.time.value = this.time / 50
			} else this.material.uniforms.time.value = this.time / 100


			this.materialBGPlane.uniforms.time.value = this.time
			// if(this.materialDNA) this.materialDNA.uniforms.time.value = this.time
			//this.renderer.setRenderTarget(this.renderTarget)
			this.renderer.render(this.scene, this.camera)
			//this.renderer.setRenderTarget(null)
	
			requestAnimationFrame(this.render.bind(this))
		}
 
	}
 
 