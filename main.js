console.log('hello from main');
const workshopsDiv = document.querySelector('#workshops');




if(navigator.serviceWorker){
	navigator.serviceWorker.register("sw.js")
		.then(registration => {
		
		
		})
		.catch(err => console.error)
}
// if(window.caches){
	// caches.open('Worshops-1.0');
	// caches.open('other-1.0');
	// caches.keys().then(console.log);
	// if(window.caches){
		// caches.open('Worshops-1.0').then(cache => {
			// cache.addAll([
				// 'index.html',
				// 'main.js',
				// 'vendors/bootstrap4.min.css'
			// ]);
		// });
	// }
// }

// simple notif string
		// if(window.Notification && window.Notification !== 'denied'){
			// Notification.requestPermission(perm => {
				// if(perm === 'granted'){
					// const notif = new Notification('Hello notification');
				// }else{
					// console.log('Autorisation de recevoir des notifs a été refusé')
				// }
			// })
		// }
		
		
		
// notif with body and icon
	// if(window.Notification && window.Notification !== 'denied'){
		// Notification.requestPermission(perm => {
			// if(perm === 'granted'){
				// const options = {
					// body:'Je suis le body de la notif',
					// icon: 'images/icons/icon-72x72.png'
				// }
				// const notif = new Notification('Hello notification', options);
			// }else{
				// console.log('Autorisation de recevoir des notifs a été refusé')
			// }
		// })
	// }
