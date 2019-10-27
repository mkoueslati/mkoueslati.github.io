// console.log("hello from Service Worker");
const cacheName = 'Worshops-1.0';

self.addEventListener('install', evt => {
	console.log("install evt ", evt);
const cachePromise = caches.open(cacheName).then(cache => {
		return cache.addAll([
           'index.html',
            'main.js',
            'style.css',
            'vendors/bootstrap4.min.css',
            'add_workshop.html',
            'add_workshop.js',
            'http://localhost:8081/workshops',
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css',
           // '/',
        ])
        .then(console.log('cache initialisé'))
       .catch(console.err);
	});
	evt.waitUntil(cachePromise);
});
self.addEventListener('activate', evt => {
	console.log("activate evt ", evt);
});
self.addEventListener('fetch', evt => {
	// console.log("fetch the URL ", evt.request.url);
	// if(!navigator.onLine){
		// console.log("OffLine");
		// const headers = {headers: {'Content-Type':'text/html;charset=utf-8'}}
		// evt.respondWith(new Response("<h1>Pas de connexion INTERNET</h1><div>Application en mode dégradé. Veuillez vous conncter</div>",headers))
	// }
	// cache only strategy with network fallback
		// evt.respondWith(
			// caches.match(evt.request).then( res => {
				
				// if(res){
					// console.log('url fetchée depuis le cache', evt.request.url)
					// return res;
				// }
				// return fetch(evt.request).then(newResponse => {
					// console.log('url récupérer sur le réseau puis mise en cache ', evt.request.url)
					// caches.open(cacheName).then (cache => cache.put(evt.request, newResponse));
					// return newResponse.clone();
				// });
			// })
		// )
		
// stratégie network first with cach fallback		
	evt.respondWith(
		fetch(evt.request).then(res => {
			if(res.status==200){
				console.log('url fetchée depuis le réseau', evt.request.url, "     ",res.status)
				caches.open(cacheName).then(cache => cache.put(evt.request, res));
				return res.clone();
			}
			else{
				
				return caches.match(evt.request).then( res => {
					if(res){
						console.log('url fetchée depuis le cache', evt.request.url, "          ",res)
						return res;
					}
				})
			}
		}).catch(err => {
			console.log('url fetchée depuis le cache', evt.request.url, "          ")
			return caches.match(evt.request);
		})
	);
});

// self.registration.showNotification('Notif depuis le sw', {
		// body:'je suis une notif dite "persistante"',
		// actions: [
			// {action: 'accept', title: 'accepter'},
			// {action: 'refuse', title: 'refuser'}
		// ]
// });

// self.addEventListener('notificationclick', evt =>{
		// if(evt.action === 'accept'){
			// console.log('vous avez accepter')
		// }else if(evt.action === 'refuse'){
			// console.log('vous avez refuser')
		// }else{
			// console.log('vous avez cliqué sur la notif(pas sur un des boutons)')
		// }
		// evt.notification.close();
	// });
	
self.addEventListener('push', evt => {
	console.log("push event ", evt);
	console.log(" data envoyé par la push notif du dev tools : ",evt.data.text());
	const title = evt.data.text();
evt.waitUntil(self.registration.showNotification(title, {body: 'ça marche', icon:'images/icons/icon-152x152.png'}));
});
