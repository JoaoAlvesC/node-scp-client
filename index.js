const {Client} = require('node-scp')

async function test() {
    try {
        const client = await Client({
            host: '181.191.18.82',
            port: 22,
            username: 'root',
            password: 'zoRiAOsG'
        })
        const result = await client.list('/var/www/')
        for (const key in result) {
            if (Object.hasOwnProperty.call(result, key)) {
                const element = result[key];
                if(element.type === '-'){
                    element.type = 'arquivo'
                }else if(element.type === 'd'){
                    element.type = 'diretório'
                }
                console.log(`${element.name} tipo => ${element.type}`)
            }
        }
        client.close()
    } catch (error) {
        console.log(error)
    }
}

test()