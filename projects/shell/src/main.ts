import { loadRemoteEntry } from '@angular-architects/module-federation';

// Falling back to loading scripts
// loadRemoteEntry({ type: 'script', remoteEntry: 'http://localhost:3000/remoteEntry.js', remoteName: 'mfe1'})

// Legacy version
// loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')

// New version for loading modules
loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})
	.then(_ => import('./bootstrap').catch(err => console.error(err)))
