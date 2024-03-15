export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return;
  const config = useRuntimeConfig()

  // socket.onopen = () => {
  //   localStorage.setItem(`connection-${uid}`, uid);
  //   console.log('socket open');
  //   // $socket.send(uid);
  // };

})
