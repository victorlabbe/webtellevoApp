// 9- deteccion de dispositivos
const d = document;
export function iKnowYou(id) {
	const $idDiv = d.getElementById(id);
	const isMobile = {
		// dispositivos andoriod
		// i-> no importa si esta en mayusaculas o minusculas
		android: () => navigator.userAgent.match(/android/i),
		ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
		windows: () => navigator.userAgent.match(/windows phone/i),
		// si en userSgent encuentra algo que dice "android",esta en ese dispositivo
		any: function () {
			return this.android() || this.ios() || this.windows();
		},
	};
	const isDesktop = {
		linux: () => navigator.userAgent.match(/linux/i),
		mac: () => navigator.userAgent.match(/mac os/i),
		windows: () => navigator.userAgent.match(/windows nt/i),
		any: function () {
			return this.linux() || this.mac() || this.windows();
		},
	};
	const isBrowser = {
		chrome: () => navigator.userAgent.match(/chrome/i),
		safarai: () => navigator.userAgent.match(/safarai/i),
		firefox: () => navigator.userAgent.match(/firefox/i),
		opera: () => navigator.userAgent.match(/opera|opera mini/i),
		ie: () => navigator.userAgent.match(/msie|iemobile/i),
		edge: () => navigator.userAgent.match(/edge/i),
		any: function () {
			return (
				this.ie() ||
				this.edge() ||
				this.chrome() ||
				this.safarai() ||
				this.firefox() ||
				this.opera()
			);
		},
	};
	$idDiv.innerHTML = `
	<ul>
		<li>User agent: <b>${navigator.userAgent}</b></li>
		<li>phone or desktop?: <b>${
			isMobile.any() ? isMobile.any() : isDesktop.any()
		}</b></li>
		<li>Navegador: <b>${isBrowser.any()}</b></li>
	</ul>
	`;
	// Contenido exclusivo
	
	if (isMobile.any()) {
		$idDiv.innerHTML += `<p> <h5 class="centrar">Descarga nuestra aplicación en tu dispositivo</h5> <br> Descargar apretando  este  boton <a href="https://www.mediafire.com/file/c83nsxuidni2zqj/app-debug.apk/file" class="btn btn-primary">Descarga</a>     </p>`;
		
		
	}else{
		if (isDesktop.any()) {
		$idDiv.innerHTML += `<p> <h5 class="centrar">Descarga nuestra aplicación en tu dispositivo</h5>  <br>Lee el codigo QR desde tu celular <br> <img src="img/qr-codeet.PNG" alt="" width="150" height="auto"> </p>`;
		
	}
	}
	
}
