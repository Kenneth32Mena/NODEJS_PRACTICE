process.stdout.write(`Hola ${process.argv[2]},¿Cuantos años tienes? `)
process.stdin.on('data', data => {
    process.stdout.write(`${process.argv[2]} , tienes ${data} años!`)
});
process.on('exit', () => {
    process.stdout.write(`\nprograma .....\n`)
});