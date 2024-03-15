export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return;
  const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  // let socket = new WebSocket(`${wsProtocol}//${window.location.host}`)
  // socket.onopen = () => {
  //   // localStorage.setItem(`connection-${uid}`, uid);
  //   console.log('socket open');
  //   // $socket.send(uid);
  // };
  // return {
  //   provide: {
  //     socket,
  //   }
  // }
})
