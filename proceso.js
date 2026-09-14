console.log(process.pid);
console.log(process.versions)
console.log(process.platform);
console.log(process.arch);

process.on('exit', () => {
    console.log(`Fin del proceso. \n`);
})